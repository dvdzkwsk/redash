import _curryN from './internal/_curryN';

var curryN = function curryN (arity, fn) {
  return _curryN(arity, [], fn);
};

export default curryN;
