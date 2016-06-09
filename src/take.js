import _curry2 from './internal/_curry2'

/**
 * @since v0.1.0
 */
var take = _curry2(function take (n, xs) {
  return xs.slice(0, n)
})

export default take