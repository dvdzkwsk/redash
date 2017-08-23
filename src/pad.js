import _defn from './internal/_defn'
import padLeft from './padLeft'
import padRight from './padRight'

/**
 * @name pad
 * @signature Integer -> String -> String -> String
 * @category String
 * @since v0.19.0
 * @description
 * Pads a string to a given length by alternating prepending/appending
 * the given character until that length is reached.
 *
 * @example
 * pad(5, 'X', 'hi') // => 'XXhiX'
 */
export default _defn(function pad (length, char, str) {
  var leftPadding = str.length + Math.ceil((length - str.length) / 2)
  return padRight(length, char, padLeft(leftPadding, char, str))
})
