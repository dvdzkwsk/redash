module.exports = function (fn, xs) {
  var i  = 0, len = xs.length,
      ys = new Array(len);

  for (; i < len; i++) {
    ys[i] = fn(xs[i], i);
  }
  return ys;
};
