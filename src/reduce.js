import _curryN from './internal/_curryN';

var reduce = _curryN(3, [], function reduce (fn, y, xs) {
  var i   = 0,
      len = xs.length;

  for (; i < len; i++) {
    y = fn(y, xs[i], i);
  }
  return y;
});

export default reduce;