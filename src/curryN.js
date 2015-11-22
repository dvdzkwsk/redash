import _curryN from './internal/_curryN';

// TODO: should be curried
var curryN = function curryN (arity, fn) {
  return _curryN(arity, [], fn);
};

export default curryN;
