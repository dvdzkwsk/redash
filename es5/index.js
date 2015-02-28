"use strict";

+(function (lib) {
  "use strict";
  if (typeof exports === "object") {
    module.exports = exports = lib;
  } else if (window) {
    window.F = window.F || lib;
  }
})((function () {
  "use strict";
  var _ = {};

  // ----------------------------------
  // Curry
  // ----------------------------------
  var curry = function (fn, arity) {
    for (var _len = arguments.length, applied = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      applied[_key - 2] = arguments[_key];
    }

    if (applied.length >= arity) {
      return fn.apply(undefined, applied);
    } else {
      return function () {
        for (var _len2 = arguments.length, newArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          newArgs[_key2] = arguments[_key2];
        }

        return curry.apply(undefined, [fn, arity].concat(applied, newArgs));
      };
    }
  };

  _.curry = function (fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return curry.apply(undefined, [fn, fn.length].concat(args));
  };
  _.curryN = function (fn, arity) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return curry.apply(undefined, [fn, arity].concat(args));
  };

  // ----------------------------------
  // Collections
  // ----------------------------------
  // Note: iterations are not performed using native methods or
  // local _.each for performance purposes.
  // ----------------------------------
  _.first = function (arr) {
    return arr.length ? arr[0] : undefined;
  };
  _.last = function (arr) {
    return arr.length ? arr[arr.length - 1] : undefined;
  };

  _.each = _.curry(function (cb, collection) {
    for (var i = 0, len = collection.length; i < len; i++) {
      cb(collection[i], i);
    }
  });

  _.map = _.curry(function (cb, collection) {
    var mapped = [];

    for (var i = 0, len = collection.length; i < len; i++) {
      mapped.push(cb(collection[i], i));
    }
    return mapped;
  });

  _.reduce = _.curry(function (cb, memo, collection) {
    var i = 0;

    if (memo === undefined) memo = collection[i++];
    for (var len = collection.length; i < len; i++) {
      memo = cb(memo, collection[i], i);
    }
    return memo;
  });

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.contains = _.curry(function (comparator, collection) {
    var contains = false;
    var compare = typeof comparator === "function" ? comparator : _.equals(comparator);

    for (var i = 0, len = collection.length; i < len; i++) {
      if (compare(collection[i], i)) contains = true;
    }
    return contains;
  });

  _.reverse = function (collection) {
    var pos = collection.length;
    var reversed = [];
    while (pos--) {
      reversed.push(collection[pos]);
    }
    return reversed;
  };

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.filter = function (filter, collection) {
    var filtered = [];
    var compare = typeof filter === "function" ? filter : _.equals(filter);

    for (var i = 0, len = collection.length; i < len; i++) {
      if (compare(collection[i], i)) filtered.push(collection[i]);
    }
    return filtered;
  };

  // ----------------------------------
  // Objects
  // ----------------------------------
  var extend = function (base, extender, override) {
    for (var key in extender) {
      if (extender.hasOwnProperty(key)) {
        if (override !== false || typeof base[key] === "undefined") {
          base[key] = extender[key];
        }
      }
    }
    return base;
  };

  // does not override properties on extended object
  _.mixin = _.curry(function (base, extender) {
    return extend(extend({}, base), extender, false);
  });

  // overrides properties on extended object
  _.extend = _.curry(function (base, extender) {
    return extend(extend({}, base), extender);
  });

  _.has = _.curry(function (key, obj) {
    return obj.hasOwnProperty(key);
  });
  _.get = _.curry(function (key, obj) {
    return obj[key];
  });

  // ----------------------------------
  // Utility
  // ----------------------------------
  _.wrap = function (item) {
    return Array.isArray(item) ? item : [item];
  };
  _.tap = _.curry(function (fn, resp) {
    fn(resp);return resp;
  });

  // ----------------------------------
  // Comparators
  // ----------------------------------
  _.is = _.curry(function (type, val) {
    return typeof val === type;
  });
  _.equals = _.curry(function (comparator, val) {
    return comparator === val;
  });

  // ----------------------------------
  return _;
})());