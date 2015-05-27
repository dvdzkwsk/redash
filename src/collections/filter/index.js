var curryN = require('../../curry/curry-n');

// TODO: is it faster to push or concat?
// TODO: is it faster to clone entire array and splice removals?
module.exports = curryN(2, function (fn, xs) {
  var i  = 0, len = xs.length,
      ys = [];

  for (; i < len; i++) {
    if (fn(xs[i], i)) {
      ys.push(xs[i]);
    }
  }
  return ys;
});
