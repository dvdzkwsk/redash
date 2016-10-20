import _curry2 from './internal/_curry2'

/**
 * @name test
 * @signature RegExp -> String -> Boolean
 * @since v0.14.0
 * @description
 * Tests a string against a Regular Expression and returns a Boolean
 * indicating whether or not it was matched.
 *
 * @example
 * test(/bar/, 'foobarbaz') // => true
 * filter(test(/joe/i, ['Joe', 'Bill', 'joey'])) // => ['Joe', 'joey']
 */
export default _curry2(function test (regex, str) {
  return regex.test(str)
})
