import _curry2 from './internal/_curry2'

/**
 * @name multiply
 * @signature Number -> Number -> Number
 * @since v0.14.0
 * @description
 * Returns the product of two numbers.
 *
 * @example
 * multiply(2, 3) // => 6
 *
 * @example
 * map(multiply(2), [1, 2, 3, 4]) // => [2, 4, 6, 8]
 */
export default _curry2(function multiply (a, b) {
  return a * b
})
