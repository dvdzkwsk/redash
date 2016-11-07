import _curry2 from './internal/_curry2'
import rangeBy from './rangeBy'

/**
 * @name range
 * @signature Integer -> Integer -> [Integer]
 * @since v0.7.0
 * @description
 * Returns containing all integers between at an initial value (inclusive)
 * and an end value (exclusive). If you wish to specify a custom step, use
 * `rangeBy`.
 * @see rangeBy
 *
 * @example
 * range(1, 5)  // => [1, 2, 3, 4]
 * range(0, -5) // => [0, -1, -2, -3, -4]
 */
export default _curry2(function range (start, end) {
  if (start < end) return rangeBy(1, start, end)
  if (start > end) return rangeBy(-1, start, end)
  throw new Error(
    'The `start` value provided to `range` must be greater than or less ' +
    'than the `end` value. Received the same value for both: ' + start + '.'
  )
})
