import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * any : (a -> Boolean) -> [a] -> Boolean
 *
 * @since v0.7.0
 */
export default _curry2(function any (fn, xs) {
  var found = false

  _arrayEach(function (x) {
    if (fn(x)) {
      return found = true
    }
  }, xs)
  return found
})
