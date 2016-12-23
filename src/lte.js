import _curry2 from './internal/_curry2'

/**
 * @name lte
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 * @description
 * Determines whether the second argument is less than or equal to the first.
 * Because infix notation with `<=` is generally used when both arguments are
 * known upfront, we optimize for readability with partial application.
 * @see gt
 * @see gte
 * @see lt
 *
 * @example
 * lte(2, 1) // => true (1 is less than 2)
 * lte(2, 2) // => true (2 is equal to 2)
 * filter(lte(3), [1, 2, 3, 4, 5]) // => [1, 2, 3]
 */
export default _curry2(function lte (a, b) {
  return b <= a
})
