var curryN = require('../../curry/curry-n');

function _reduce (fn, accum, xs, i) {
  var len = xs.length;

  for (; i < len; i++) {
    accum = fn(accum, xs[i], i);
  }
  return accum;
}

module.exports = curryN(3, function (fn, accum, xs) {
  return typeof accum === 'undefined' ?
    _reduce(fn, xs[0], xs, 1) : _reduce(fn, accum, xs, 0);
});
