module.exports = function (fn, accum, xs, i) {
  var len = xs.length;

  for (; i < len; i++) {
    accum = fn(accum, xs[i], i);
  }
  return accum;
};
