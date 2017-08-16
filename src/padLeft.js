import _defn from './internal/_defn'

/**
 * @name padLeft
 * @signature Integer -> String -> String -> String
 * @category String
 * @since v0.19.0
 * @description
 * Pads a string to a given length by prepending it with the given character
 * until that length is reached.
 *
 * @example
 * padLeft(5, 'X', 'hi') // => 'XXXhi'
 */
// TODO(zuko): how should we handle char of length > 1?
// TODO(zuko): throw error if char is empty?
export default _defn('padLeft', function (length, char, str) {
  while (str.length < length) {
    str = char + str
  }
  return str
})
