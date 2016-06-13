import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * filter : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function filter (fn, xs) {
  var ys = []

  _arrayEach(function (x) {
    if (fn(x)) {
      ys.push(x)
    }
  }, xs)
  return ys
})
