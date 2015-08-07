var _slice = require('../../utils/slice');

function _curryN (arity, fn, applied) {
  if (applied.length >= arity) {
    return fn.apply(null, applied);
  } else {
    return function () {
      return arguments.length ?
        _curryN(arity, fn, applied.concat(_slice.apply(arguments))) :
        _curryN(arity, fn, applied);
    };
  }
};

module.exports = _curryN;
