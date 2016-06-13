import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * takeUntil : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function takeUntil (fn, xs) {
  var ys

  _arrayEach(function (x, i) {
    if (fn(x)) {
      ys = _slice(xs, 0, i)
      return true
    }
  }, xs)
  return ys || _slice(xs)
})
