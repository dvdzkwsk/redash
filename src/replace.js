import _defn from './internal/_defn'

/**
 * @name replace
 * @signature
 * String|RegExp -> String -> String
 * @category String
 * @since v0.17.0
 * @description
 * Replaces a matched string/regular expression in a string with another value.
 *
 * @example
 * replace('Scott', 'Schrute', 'Dwight Scott') // => 'Dwight Schrute'
 * replace(/hi/g, 'hey', 'hi hi hi')           // => 'hey hey hey'
 */
export default _defn(function replace (match, value, str) {
  return str.replace(match, value)
})
