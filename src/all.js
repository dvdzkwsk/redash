import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * all : (a -> Boolean) -> [a] -> Boolean
 *
 * @since v0.7.0
 */
export default _curry2(function all (fn, xs) {
  var all = true

  _arrayEach(function (x) {
    if (fn(x)) {
      all = false
      return true
    }
  }, xs)
  return all
})
