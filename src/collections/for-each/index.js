var curryN = require('../../curry/curry-n');

module.exports = curryN(2, function forEach (fn, xs) {
  var i = 0, len = xs.length;

  for (; i < len; i++) {
    fn(xs[i], i);
  }
});
