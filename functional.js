;(function(factory) {
    'use strict';

    // Pattern by Ramda.js for properly exposing module based on
    // execution environment.
    if (typeof exports === 'object') {
      module.exports = exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      define(factory);
    } else {
      this.functional = factory(this);
    }

}(function(context) {
  'use strict';
  var _ = {};

  _.curry = function() {
      console.log('foo');
  };

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

  _.toArray = function(collection) {
    return [].slice.call(collection);
  };

  _.log = function(i) {
    console.log(i); return i;
  };

  return _;
}));