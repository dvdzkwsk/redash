"use strict";

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

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
  _.curryN = function (arity, fn) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return curry.apply(undefined, [arity, fn].concat(args));
  };

  // ----------------------------------
  // Composition
  // ----------------------------------
  _.pipe = function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    var first = fns[0];
    var rest = fns.slice(1);

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _.reduce(function (memo, fn) {
        return fn(memo);
      }, first.apply(undefined, args), rest);
    };
  };

  _.compose = function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return _.pipe.apply(_, _toConsumableArray(_.reverse(fns)));
  };

  // ----------------------------------
  // Functions
  // ----------------------------------
  // TODO: Create/Expand methods to allow calling/invoking functions
  // with specific contexts/arguments. These should be used with .all(),
  // for example.

  _.invoke = _.curry(function (method, obj) {
    if (typeof obj[method] === "function") {
      obj[method].call(obj);
    }
  });

  _.all = function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _.each(function (fn) {
        return fn.apply(undefined, args);
      }, fns);
    };
  };

  // ----------------------------------
  // Collections
  // ----------------------------------
  // Note: iterations are not performed using native methods or
  // local _.each for performance purposes.
  // ----------------------------------
  _.first = function (arr) {
    return arr[0];
  };
  _.last = function (arr) {
    return arr[arr.length - 1];
  };
  _.join = _.curry(function (chr, arr) {
    return arr.join(chr);
  });

  _.each = _.curry(function (cb, arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      cb(arr[i], i);
    }
  });

  _.map = _.curry(function (cb, arr) {
    var len = arr.length;
    var mapped = new Array(len);

    for (var i = 0; i < len; i++) {
      mapped[i] = cb(arr[i], i);
    }
    return mapped;
  });

  _.reduce = _.curry(function (cb, memo, arr) {
    var i = 0;

    if (typeof memo === "undefined") memo = arr[i++];
    for (var len = arr.length; i < len; i++) {
      memo = cb(memo, arr[i], i);
    }
    return memo;
  });

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.contains = _.curry(function (comparator, arr) {
    var contains = false;
    var compare = typeof comparator === "function" ? comparator : _.equals(comparator);

    for (var i = 0, len = arr.length; i < len; i++) {
      if (compare(arr[i], i)) contains = true;
    }
    return contains;
  });

  _.reverse = function (arr) {
    var i = arr.length;
    var reversed = [];

    while (i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  };

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.filter = _.curry(function (filter, arr) {
    var filtered = [];
    var compare = typeof filter === "function" ? filter : _.equals(filter);

    for (var i = 0, len = arr.length; i < len; i++) {
      if (compare(arr[i], i)) filtered.push(arr[i]);
    }
    return filtered;
  });

  _.take = _.curry(function (amt, arr) {
    var max = amt > arr.length ? arr.length : amt;
    var result = new Array(max);

    for (var i = 0; i < max; i++) {
      result[i] = arr[i];
    }
    return result;
  });

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
  // Strings
  // ----------------------------------
  _.split = _.curry(function (chr, str) {
    return str.split(chr);
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