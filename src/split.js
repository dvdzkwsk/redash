import _curry2 from './internal/_curry2'

/**
 * @name split
 * @signature String -> String -> [String]
 * @since v0.10.0
 * @description
 * Splits a string on some delimeter and returns an array containing the
 * fragments of that string between the delimeter.
 * @see join
 *
 * @example
 * split(',', 'Jim, Bill, Bob') // => ['Jim', 'Bill', 'Bob']
 */
export default _curry2(function split (char, str) {
  return str.split(char)
})
