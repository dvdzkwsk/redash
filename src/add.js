import _curryN from './internal/_curryN';

var add = _curryN(2, [], function add (a, b) {
  return a + b;
});

export default add;
