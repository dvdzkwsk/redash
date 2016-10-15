import _curry2 from './internal/_curry2'

/**
 * @name test
 * @signature RegExp -> String -> Boolean
 * @since v0.14.0
 */
export default _curry2(function test (regex, str) {
  return regex.test(str)
})
