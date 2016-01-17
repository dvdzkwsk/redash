import _curryN from './internal/_curryN'

var curryN = _curryN(2, [], function curryN (arity, fn) {
  return _curryN(arity, [], fn)
})

export default curryN
