var curryN = require('../../curry/curry-n/curry-n');

module.exports = curryN(2, function (fn, xs) {
  var i = 0, len = xs.length;

  for (; i < len; i++) {
    fn(xs[i], i);
  }
});