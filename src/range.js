import _defn from './internal/_defn'
import rangeBy from './rangeBy'

/**
 * @name range
 * @signature Integer -> Integer -> [Integer]
 * @category Collection
 * @since v0.7.0
 * @description
 * Returns a list of all integers between an initial value (inclusive) and an
 * end value (exclusive). If you wish to specify a step, use [rangeBy](#rangeBy).
 * @see rangeBy
 *
 * @example
 * range(1, 5)  // => [1, 2, 3, 4]
 * range(0, -5) // => [0, -1, -2, -3, -4]
 */
export default _defn('range', function (start, end) {
  return rangeBy(start < end ? 1 : -1, start, end)
})
