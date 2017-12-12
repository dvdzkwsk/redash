/**
 * @name test
 * @category String
 * @since v0.14.0
 * @description
 * Returns whether or not a string is matched by a regular expression.
 *
 * @example
 * test(/bar/, 'foobarbaz') // => true
 * filter(test(/joe/i), ['Joe', 'Bill', 'joey']) // => ['Joe', 'joey']
 */
export default function test (regex, str) {
  return regex.test(str)
}
