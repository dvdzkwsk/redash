import _defn from './internal/_defn'

/**
 * @name toUpper
 * @signature String -> String
 * @category String
 * @since v0.4.0
 * @description
 * Upper-cases all characters in a string.
 * @see toLower
 *
 * @example
 * toUpper('hi there')  // => 'HI THERE'
 * toUpper('GoodBye')   // => 'GOODBYE'
 */
export default _defn('toUpper', function toUpper (a) {
  return a.toUpperCase()
})
