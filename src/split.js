/**
 * @name split
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
export default function split (char, str) {
  return str.split(char)
}
