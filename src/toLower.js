import _defn from './internal/_defn'

/**
 * @name toLower
 * @signature String -> String
 * @category String
 * @since v0.4.0
 * @description
 * Lower-cases all characters in a string.
 * @see toUpper
 *
 * @example
 * toLower('Hi There')  // => 'hi there'
 * toLower('GoodBye')   // => 'goodbye'
 */
export default _defn('toLower', function toLower (a) {
  return a.toLowerCase()
})
