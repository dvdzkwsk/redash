/**
 * @name isEven
 * @signature Number -> Boolean
 * @since v0.14.0
 * @description
 * Returns whether or not a number is even.
 * @see isOdd
 *
 * @example
 * isEven(2)        // => true
 * isEven(0)        // => true
 * isEven(2.4)      // => false
 * isEven(Infinity) // => false
 */
export default function isEven (a) {
  return !isNaN(a) && isFinite(a) && a % 2 === 0
}
