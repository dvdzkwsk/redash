import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * findLast : (a -> Boolean) -> [a] -> a | undefined
 *
 * @since v0.12.0
 */
export default _curry2(function find (pred, xs) {
  var res

  _arrayEach(function (x) {
    if (pred(x)) {
      res = x
    }
  }, xs)
  return res
})
