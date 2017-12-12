/**
 * @name divide
 * @category Math
 * @since v0.14.0
 * @description
 * Returns the result of the second argument divided by the first. Because
 * infix notation with `/` is generally used when both arguments are known
 * upfront, we optimize for readability with partial application.
 *
 * @example
 * divide(2, 8) // => 4 (divide 8 by 2)
 *
 * @example
 * map(divide(2), [2, 4, 6, 8]) // => [1, 2, 3, 4]
 */
export default function divide (a, b) {
  if (!a) {
    throw new Error('Cannot divide by 0.')
  }

  return b / a
}
