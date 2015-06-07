var curryN  = require('../../curry/curry-n'),
    _reduce = require('./_internal');

module.exports = curryN(3, function reduce (fn, accum, xs) {
  return typeof accum === 'undefined' ?
    _reduce(fn, xs[0], xs, 1) : _reduce(fn, accum, xs, 0);
});
