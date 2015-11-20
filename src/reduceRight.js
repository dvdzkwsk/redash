import _curryN from './internal/_curryN';

var reduceRight = _curryN(3, [], function reduceRight (fn, y, xs) {
  var i = xs.length - 1;

  for (; i >= 0; i--) {
    y = fn(y, xs[i], i);
  }
  return y;
});

export default reduceRight;