var curryN = require('../../curry/curry-n/curry-n');

module.exports = curryN(3, function (fn, xs) {
  var i  = 0, len = xs.length,
      ys = new Array(len);

  for (; i < len; i++) {
    ys[i] = fn(xs[i], i);
  }
  return ys;
});
