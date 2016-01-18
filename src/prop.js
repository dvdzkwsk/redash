import _curry2 from './internal/_curry2'

var prop = _curry2(function prop (p, x) {
  return x[p]
})

export default prop