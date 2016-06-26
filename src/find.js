import _arrayEachShortCircuitable from './internal/_arrayEachShortCircuitable'
import _curry2 from './internal/_curry2'

/**
 * find : (a -> Boolean) -> [a] -> a | undefined
 *
 * @since v0.6.0
 */
export default _curry2(function find (pred, xs) {
  var res

  _arrayEachShortCircuitable(function (x) {
    if (pred(x)) {
      res = x
      return true
    }
  }, xs)
  return res
})
