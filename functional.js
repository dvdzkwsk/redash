;(function(factory) {
    'use strict';

    // Pattern by Ramda.js for properly exposing module based on
    // execution environment.
    if (typeof exports === 'object') {
      module.exports = exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      define(factory);
    } else this.functional = factory(this);

}(function(context) {
  'use strict';
  var _ = {}; // public module exports

  // ------------------------
  // Curry / Partial Application
  // ------------------------
  // TODO: this is only a simple curry at the moment,
  // need to expand to implement recurrying until
  // all arguments have been applied
  _.curry = function(fn) {
    var args = _.toArray(arguments, 1);
    return function() {
      return fn.apply(this, args.concat(_.toArray(arguments)));
    };
  };

  // ------------------------
  // Compositions
  // ------------------------
  // TODO: build compositions with private method
  // to reduce execution time. Current return function
  // runs .reduceRight() on each call.
  _.compose = function() {
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
  _.toArray = function(x, offset) {
    return [].slice.call(x).slice(offset);
  };

  _.inArray = function(arr, x) {
    for (var i=0,len=arr.length; i<len; i++) {
      if (arr[i] === x) return true;
    }
    return false;
  };

  _.log = function(i) {
    console.log(i); return i;
  };

  return _;
}));