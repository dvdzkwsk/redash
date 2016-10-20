import _curry2 from './internal/_curry2'

/**
 * @name gt
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 * @description
 * Returns a boolean indicating whether or not the second argument was greater
 * than the first. Because infix notation with `>` is generally used when both
 * arguments are known upfront, we optimize for readability with partial application.
 * @see gte
 * @see lt
 * @see lte
 *
 * @example
 * gt(2, 5) // => true (5 is greater than 2)
 * filter(gt(3), [1, 2, 3, 4, 5]) // => [4, 5]
 */
export default _curry2(function gt (a, b) {
  return b > a
})
