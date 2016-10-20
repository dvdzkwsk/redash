/**
 * @name isNil
 * @signature a -> Boolean
 * @since v0.11.0
 * @description
 * Determines whether the argument is equal to `undefined` or `null`.
 * This check is strictly for the above values; it does not return `true` for
 * any other falsy value.
 *
 * @example
 * isNil(null)      // => true
 * isNil(undefined) // => true
 * isNil('')        // => false
 * isNil(0)         // => false
 *
 * @param {*} x
 * @returns Boolean
 */
export default function isNil (x) {
  return x == null
}
