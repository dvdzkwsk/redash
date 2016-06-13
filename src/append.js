import _concat from './internal/_concat'
import _curry2 from './internal/_curry2'

/**
 * append : a -> [a] -> [a]
 *
 * @since v0.10.0
 */
var append = _curry2(function append (x, xs) {
  return _concat.call(xs, [x])
})

export default append
