import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * takeUntil : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function takeUntil (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (fn(xs[i])) {
      return _slice.call(xs, 0, i)
    }
  }
  return _slice.call(xs)
})
