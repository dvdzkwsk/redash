import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * @name prepend
 * @signature a -> [a] -> a | String -> String -> String
 * @since v0.14.0
 */
export default _curry2(function prepend (a, as) {
  return _concat.call([a], as)
})
