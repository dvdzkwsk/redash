import _defn from './internal/_defn'

/**
 * @name gt
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 * @description
 * Determines whether the second argument is greater than the first. Because
 * infix notation with `>` is generally used when both arguments are known
 * upfront, we optimize for readability with partial application.
 * @see gte
 * @see lt
 * @see lte
 *
 * @example
 * gt(2, 5) // => true (5 is greater than 2)
 * filter(gt(3), [1, 2, 3, 4, 5]) // => [4, 5]
 */
export default _defn('gt', function gt (a, b) {
  return b > a
})
