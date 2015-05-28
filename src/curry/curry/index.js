var _slice  = require('../../utils/slice'),
    _curryN = require('../curry-n/_internal');

module.exports = function (fn) {
  var applied = arguments.length > 1 ?
    _slice.apply(arguments).slice(1) : [];

  return _curryN.apply(undefined, [fn.length, fn, applied]);
};
