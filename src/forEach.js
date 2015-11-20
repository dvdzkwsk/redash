import _curryN from './internal/_curryN';

var forEach = _curryN(2, [], function forEach (fn, xs) {
  var i   = 0,
      len = xs.length;

  for (; i < len; i++) {
    fn(xs[i], i);
  }
});

export default forEach;