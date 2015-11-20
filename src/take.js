import _curryN from './internal/_curryN';

var take = _curryN(2, [], function take (n, xs) {
  return xs.slice(0, n);
});

export default take;