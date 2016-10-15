import _curry2 from './internal/_curry2'

/**
 * @name join
 * @signature String -> [String] -> String
 * @since v0.13.0
 */
export default _curry2(function join (joiner, xs) {
  return xs.join(joiner)
})
