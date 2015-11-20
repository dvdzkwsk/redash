import _curryN from './internal/_curryN';

var propEq =  _curryN(3, [], function propEq (p, y, x) {
  return x[p] === y;
});

export default propEq;