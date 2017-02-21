import _defn from './internal/_defn'
import _concat from './internal/_concat'

/**
 * @name prepend
 * @signature a -> [a] -> a | String -> String -> String
 * @since v0.14.0
 */
export default _defn('prepend', function (a, as) {
  if (typeof as === 'string') {
    return a + as
  }
  return _concat.call([a], as)
})
