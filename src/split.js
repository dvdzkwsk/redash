import _curry2 from './internal/_curry2'

/**
 * sum : String -> String -> [String]
 *
 * @since v0.10.0
 */
export default _curry2(function split (char, str) {
  return str.split(char)
})
