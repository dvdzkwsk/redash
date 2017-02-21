import _defn from './internal/_defn'

/**
 * @name gte
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 * Determines whether the second argument is greater than or equal to the first.
 * Because infix notation with `>=` is generally used when both arguments are
 * known upfront, we optimize for readability with partial application.
 * @see gt
 * @see lt
 * @see lte
 *
 * @example
 * gte(2, 5) // => true (5 is greater than 2)
 * gte(5, 5) // => true (5 is equal to 5)
 * filter(gte(3), [1, 2, 3, 4, 5]) // => [3, 4, 5]
 */
export default _defn('gte', function (a, b) {
  return b >= a
})
