import _curryN from './internal/_curryN'

var prop = _curryN(2, [], function prop (p, x) {
  return x[p]
})

export default prop