import rangeBy from './rangeBy'

/**
 * @name range
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
export default function range (start, end) {
  return rangeBy(start < end ? 1 : -1, start, end)
}
