import _defn from './internal/_defn'

/**
 * @name padRight
 * @signature Integer -> String -> String -> String
 * @namespace String
 * @since v0.19.0
 * @description
 * Pads a string to a given length by appending the given character to it
 * until that length is reached.
 *
 * @example
 * padRight(5, 'X', 'hi') // => 'hiXXX'
 */
// TODO(zuko): how should we handle char of length > 1?
// TODO(zuko): throw error if char is empty?
export default _defn('padRight', function (length, char, str) {
  while (str.length < length) {
    str += char
  }
  return str
})
