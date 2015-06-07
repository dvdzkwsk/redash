var _slice  = require('../../utils/slice'),
    _curryN = require('./_internal');

module.exports = function curryN (arity, fn) {
  var applied = arguments.length > 2 ?
    _slice.apply(arguments).slice(2) : [];

  return _curryN(arity, fn, applied);
};
