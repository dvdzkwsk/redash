//! Functional JavaScript library by https://github.com/davezuko
;(function(factory) { 'use strict';

    // Pattern by Ramda.js for properly exposing module based on
    // execution environment.
    if (typeof exports === 'object') {
      module.exports = exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      define(factory);
    } else window.F = factory(window);

}(function(context) { 'use strict';
  var _ = {},
      _config = {

        // pass { log : < yourHandler > } to _.config() to change
        // the default logging behavior (console.log)
      };

  // ------------------------
  // Curry / Partial Application
  // ------------------------
  // TODO: this is only a simple curry at the moment,
  // need to expand to implement recurrying until
  // all arguments have been applied
  _.curry = function (fn) {
    var args = _.toArray(arguments, 1);
    return function() {
      return fn.apply(this, args.concat(_.toArray(arguments)));
    };
  };

  // partially apply a function until all arguments
  // have been supplied.
  _.partial = function (fn) {
    var arity = fn.length,
        args  = _.toArray(arguments, 1);

    return function () {
      args = args.concat(_.toArray(arguments));
      if (args.length >= arity) {
        return fn.apply(null, args);
      } else {
        args.unshift(fn);
        return _.partial.apply(null, args);
      }
    };
  };

  _.partialRight = function (fn) {
    // todo...
  };

  // ------------------------
  // Compositions
  // ------------------------
  // More efficient way of doing this?
  _.compose = function () {
    var fns  = _.toArray(arguments),
        last = fns.length - 1;

    return function() {
      fns[last] = fns[last].apply(this, _.toArray(arguments));
      return fns.reduceRight(function(result, fn) {
        return fn(result);
      });
    };
  };

  // ------------------------
  // Array Helpers
  // ------------------------
  _.toArray = function (x, offset) {
    return [].slice.call(x, offset);
  };

  // recursively searches an array and all nested arrays
  // for a specified item.
  _.inArray = function (item, arr) {
    return (arr.indexOf(item) !== -1) ?
      true :
      !!arr.filter(_.isArray).filter(_.partial(_.inArray, item)).length;
  };

  _.isArray = function (arr) {
    return Array.isArray(arr);
  };

  // TODO: fix, needs to support non-array first items
  // (and better than just inserting into an array)
  // _.flatten = function (arr) {
  //   return arr.reduce(function (memo, item) {
  //     return memo.concat(item);
  //   });
  // };

  _.first = function (arr) {
    return arr[0];
  };

  _.last = function (arr) {
    return arr[arr.length - 1];
  };

  // wrappers on top of native functionality for easier compositions.
  _.reverse = function (arr) {
    return arr.reverse();
  };

  _.concat = function (a, b) {
    return a.concat(b);
  };
 
  // ------------------------
  // Collections
  // ------------------------

  // filter


  // ------------------------
  // Objects
  // ------------------------

  _.get = function (path, obj) {
    var props;

    // return auto-curried function if no source obj received.
    if (typeof obj === 'undefined') {
      return _.partial(_.get, path);
    }

    // return early if it's a top level property
    props = path.split('.');
    if (props.length === 1) return obj[props[0]];
    
    try {
      props[0] = obj[props[0]];
      // TODO: this should just use _.partialRight(_.get)
      return props.reduce(function (memo, prop) {
        return _.get(prop, memo);
      });
    } catch (e) {
      return undefined;
    }
  };

  _.set = function (path, obj, val) {
    var props = path.split('.'),
        len   = props.length;

    // top-level property, return early
    if (len === 1) {
      obj[props[0]] = val;
      return obj[props[0]];
    }

    // verify that intermediary properties exist and then
    // assign value to destination property.
    // TODO: change to a reduce.
    props.forEach(function (prop, index) {
      if (index < len - 1) {
        if (typeof obj[prop] === 'undefined') obj[prop] = {};
        obj = obj[prop];
      } else obj[prop] = val;
    });
    return obj[props[len - 1]];
  };

  _.remap = function (map, obj) {
    var remapped = {};

    Object.keys(map).forEach(function (source) {
      _.set(map[source], remapped, _.get(source, obj));
    });

    return remapped;
  };

  // copy

  // shallow-copy

  // ------------------------
  // Common / Utility
  // ------------------------
  _.config = function (config) {
    _config = config; // TODO: merge these

    if (config.log && typeof config.log === 'function') {
      _.log = function (m) {
        _config.log(m); return m;
      };
    }
  };

  _.log = function (m) {
    console.log(m); return m;
  };

  return _;
}));