import _defn from './internal/_defn'

/**
 * @name subtract
 * @signature Number -> Number -> Number
 * @category Math
 * @since v0.13.0
 * @description
 * Returns the difference of two numbers. Because infix notation with `-` is
 * generally used when both arguments are known upfront, we optimize for
 * readability with partial application.
 * @see add
 *
 * @example
 * subtract(2, 5) // => 3 (5 - 2)
 *
 * @example
 * const subtract5 = subtract(5)
 * subtract5(10) // => 5
 * subtract5(15) // => 10
 */
export default _defn(function subtract (a, b) {
  return b - a
})
