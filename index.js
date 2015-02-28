+(lib => {
  'use strict';

  if (typeof exports === 'object') {
    module.exports = exports = lib;
  } else if (window) {
    window.F = window.F || lib;
  }
})((() => {
  'use strict';
  let _ = {};

  // ----------------------------------
  // Curry
  // ----------------------------------
  const recurry = (fn, ...applied) => {
    let arity = fn.length;

    if (applied.length >= arity) {
      return fn(...applied);
    } else {
      return (...newArgs) => recurry(fn, ...[...applied, ...newArgs]);
    }
  };

  _.curry = (fn, ...args) => recurry(fn, ...args);

  // ----------------------------------
  // Collections
  // ----------------------------------
  // Note: iterations are not performed using native methods or
  // local _.each for performance purposes.
  // ----------------------------------
  _.first = (arr) => arr.length ? arr[0] : undefined;
  _.last  = (arr) => arr.length ? arr[arr.length - 1] : undefined;

  _.each = _.curry((cb, collection) => {
    for (let i=0,len=collection.length; i<len; i++) {
      cb(collection[i], i);
    }
  });

  _.map = _.curry((cb, collection) => {
    let mapped = [];

    for (let i=0,len=collection.length; i<len; i++) {
      mapped.push(cb(collection[i], i));
    }
    return mapped;
  });

  _.reduce = _.curry((cb, memo, collection) => {
    let i = 0;

    if (memo === undefined) memo = collection[i++];
    for (let len=collection.length; i<len; i++) {
      memo = cb(memo, collection[i], i);
    }
    return memo;
  });

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.contains = _.curry((comparator, collection) => {
    let contains = false;
    let compare = typeof comparator === 'function' ?
      comparator : _.equals(comparator);

    for (let i=0,len=collection.length; i<len; i++) {
      if (compare(collection[i], i)) contains = true;
    }
    return contains;
  });

  _.reverse = (collection) => {
    let pos = collection.length;
    let reversed = [];
    while (pos--) {
      reversed.push(collection[pos]);
    }
    return reversed;
  };

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.filter = (filter, collection) => {
    let filtered = [];
    let compare  = typeof filter === 'function' ?
      filter : _.equals(filter);

    for (let i=0,len=collection.length; i<len; i++) {
      if (compare(collection[i], i)) filtered.push(collection[i]);
    }
    return filtered;
  };

  // ----------------------------------
  // Objects
  // ----------------------------------
  const extend = (base, extender, override) => {
    for (let key in extender) {
      if (extender.hasOwnProperty(key)) {
        if (override !== false || typeof base[key] === 'undefined') {
          base[key] = extender[key];
        }
      }
    }
    return base;
  };

  // does not override properties on extended object
  _.mixin  = _.curry((base, extender) =>
    extend(extend({}, base), extender, false));

  // overrides properties on extended object
  _.extend = _.curry((base, extender) =>
    extend(extend({}, base), extender));

  _.has = _.curry((key, obj) => obj.hasOwnProperty(key));
  _.get = _.curry((key, obj) => obj[key]);

  // ----------------------------------
  // Utility
  // ----------------------------------
  _.wrap = (item) => Array.isArray(item) ? item : [item];
  _.tap = _.curry((fn, resp) => { fn(resp); return resp; });

  // ----------------------------------
  // Comparators
  // ----------------------------------
  _.is = _.curry((type, val) => typeof val === type);
  _.equals = _.curry((comparator, val) => comparator === val);

  // ----------------------------------
  return _;
})());
