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
  var recurry = function (fn) {
    for (var _len = arguments.length, applied = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      applied[_key - 1] = arguments[_key];
    }

    var arity = fn.length;

    if (applied.length >= arity) {
      return fn.apply(undefined, applied);
    } else {
      return function () {
        for (var _len2 = arguments.length, newArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          newArgs[_key2] = arguments[_key2];
        }

        return recurry.apply(undefined, [fn].concat([].concat(applied, newArgs)));
      };
    }
  };

  _.curry = function (fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return recurry.apply(undefined, [fn].concat(args));
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
    if (!collection.length) return;

    for (var i = 0, len = collection.length; i < len; i++) {
      cb(collection[i]);
    }
  });

  _.map = _.curry(function (cb, collection) {
    var mapped = [];

    for (var i = 0, len = collection.length; i < len; i++) {
      mapped.push(cb(collection[i]));
    }
    return mapped;
  });

  _.reduce = _.curry(function (cb, memo, collection) {
    var offset = 0;

    if (memo === undefined) memo = collection[offset++];
    for (var len = collection.length; offset < len; offset++) {
      memo = cb(memo, collection[offset]);
    }
    return memo;
  });

  // TODO: Better way to fix loop redundancy than always comparing
  // against a function?
  _.contains = _.curry(function (compare, collection) {
    var contains = false;

    if (typeof compare !== "function") {
      compare = (function (compareTo) {
        return function (item) {
          return item === compareTo;
        };
      }).call(undefined, compare);
    }
    for (var i = 0, len = collection.length; i < len; i++) {
      if (compare(collection[i])) {
        contains = true;
      }
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
  // Comparators
  // ----------------------------------
  _.is = function (type, val) {
    return typeof val === type;
  };

  // ----------------------------------
  return _;
})());