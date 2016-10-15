import _curry2 from './internal/_curry2'

/**
 * @name split
 * @signature String -> String -> [String]
 * @since v0.10.0
 */
export default _curry2(function split (char, str) {
  return str.split(char)
})
