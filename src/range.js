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
export default rangeBy(1)
