import _defn from './internal/_defn'

/**
 * @name split
 * @signature String -> String -> [String]
 * @category String
 * @since v0.10.0
 * @description
 * Splits a string on some delimeter and returns a list containing the
 * fragments of that string between the delimeter.
 * @see join
 *
 * @example
 * split(', ', 'Jim, Bill, Bob') // => ['Jim', 'Bill', 'Bob']
 */
export default _defn('split', function (char, str) {
  return str.split(char)
})
