var _slice = require('../../utils/slice');
var curryN = require('../curry-n/curry-n');

module.exports = function (fn) {
  var applied;

  if (arguments.length > 1) {
    applied = _slice.apply(arguments).slice(1);
  }
  return curryN(fn.length, fn, applied);
};
