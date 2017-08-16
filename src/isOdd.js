import _defn from './internal/_defn'

/**
 * @name isOdd
 * @signature Integer -> Boolean
 * @since v0.14.0
 * @description
 * Tests whether an integer is odd.
 * @see isEven
 *
 * @example
 * isOdd(3)        // => true
 * isOdd(0)        // => false
 * isOdd(3.9)      // => false
 * isOdd(Infinity) // => false
 */
export default _defn('isOdd', function (a) {
  return !isNaN(a) && isFinite(a) && !!a && a === Math.floor(a) && a % 2 !== 0
})
