import _curryN from './internal/_curryN';

var takeWhile = _curryN(2, [], function takeWhile (fn, xs) {
  var i   = 0,
      len = xs.length;

  for (; i < len; i++) {
    if (!fn(xs[i], i)) {
      return xs.slice(0, i);
    }
  }
  return xs.slice(0);
});

export default takeWhile;