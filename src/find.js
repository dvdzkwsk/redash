import _arrayEachShortCircuitable from './internal/_arrayEachShortCircuitable'
import _curry2 from './internal/_curry2'

/**
 * find : (a -> Boolean) -> [a] -> a | undefined
 *
 * @since v0.6.0
 */
export default _curry2(function find (pred, xs) {
  var y

  _arrayEachShortCircuitable(function (x) {
    if (pred(x)) {
      y = x
      return true
    }
  }, xs)
  return y
})
