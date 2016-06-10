import _curry2 from './internal/_curry2'

/**
 * @since v0.1.0
 */
var prop = _curry2(function prop (p, x) {
  return x[p]
}, 'prop : String -> {k:v} -> v')

export default prop