var _slice = require('../../utils/slice');

function _curryN (arity, fn, applied) {
  if (applied.length >= arity) {
    return fn.apply(undefined, applied);
  } else {
    return function () {
      var args = _slice.apply(arguments);

      return _curryN(arity, fn, applied.concat(args));
    };
  }
};

module.exports = _curryN;
