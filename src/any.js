import _arrayEachShortCircuitable from './internal/_arrayEachShortCircuitable'
import _curry2 from './internal/_curry2'

/**
 * any : (a -> Boolean) -> [a] -> Boolean
 *
 * @since v0.7.0
 */
export default _curry2(function any (fn, xs) {
  var res = false

  _arrayEachShortCircuitable(function (x) {
    if (fn(x)) {
      return (res = true)
    }
  }, xs)
  return res
})
