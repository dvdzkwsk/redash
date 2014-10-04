//! Functional JavaScript library by https://github.com/davezuko
;(function(factory) { 'use strict';

    // Pattern by Ramda.js for properly exposing module based on
    // execution environment.
    if (typeof exports === 'object') {
      module.exports = exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      define(factory);
    } else this.functional = factory(this);

}(function(context) { 'use strict';
  var _ = {};

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
  _.partial = _.partially = function (fn) {
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

  // ------------------------
  // Compositions
  // ------------------------
  // TODO: build compositions with private method
  // to reduce execution time. Current return function
  // runs .reduceRight() on each call.
  _.compose = function () {
    var fns  = _.toArray(arguments),
        last = fns.length - 1;

    return function(arg) {
      fns[last] = arguments.length === 1 ?
        fns[last](arg) :
        fns[last].apply(this, _.toArray(arguments));

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

  _.isArray = function (array) {
    if (typeof Array.isArray !== 'undefined') {
      _.isArray = function (array) {
        return Array.isArray(array);
      };
    } else {
      _.isArray = function (array) {
        return Object.toString.call(array) === '[object Array]';
      };
    }
    return _.isArray(array);
  };

  _.first = function (array) {
    return array[0];
  };

  _.last = function (array) {
    return array[array.length - 1];
  };
 
  // ------------------------
  // Collections
  // ------------------------


  // ------------------------
  // Common / Utility
  // ------------------------
  _.log = function (i) {
    console.log(i); return i;
  };

  // ------------------------
  // Setup (Resolve Dynamic Functions)
  // ------------------------
  _.inArray(5, [1]);

  return _;
}));