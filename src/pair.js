import _curry2 from './internal/_curry2'

/**
 * @name pair
 * @signature a -> b -> [a, b]
 * @since v0.13.0
 */
export default _curry2(function pair (a, b) {
  return [a, b]
})
