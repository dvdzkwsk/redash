import _curry2 from './internal/_curry2'

/**
 * @name lt
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 * @description
 * Returns a boolean indicating whether or not the second argument was less
 * than the first. Because infix notation with `<` is generally used when both
 * arguments are known upfront, we optimize for readability with partial
 * application.
 * @see gt
 * @see gte
 * @see lte
 *
 * @example
 * lt(2, 1) // => true (1 is less than 2)
 * filter(lt(3), [1, 2, 3, 4, 5]) // => [1, 2]
 */
export default _curry2(function lt (a, b) {
  return b < a
})
