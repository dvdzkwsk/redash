var curryN  = require('../../curry/curry-n');

module.exports = curryN(3, function (inc, start, end) {
  var i, y, ct, ys;

  // return early if the expression would result in an infinite loop.
  if (
    inc === 0 ||
    (end < start && inc > 0) ||
    (end > start && inc < 0)
  ) {
    return [];
  }

  i  = 0;
  y  = start;
  ct = Math.abs(Math.floor((end - start) / inc));
  ys = new Array(ct);

  for (; i <= ct; i++) {
    ys[i] = y;
    y += inc;
  }
  return ys;
});
