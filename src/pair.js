import _curry2 from './internal/_curry2'

/**
 * @name pair
 * @signature a -> b -> [a, b]
 * @since v0.13.0
 * @description
 * Binary function that returns the two arguments as a tuple.
 *
 * @example
 * pair(1, 2) // => [1, 2]
 */
export default _curry2(function pair (a, b) {
  return [a, b]
})
