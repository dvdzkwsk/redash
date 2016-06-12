import _concat from './internal/_concat'
import _curry2 from './internal/_curry2'

/**
 * @since v0.10.0
 */
var append = _curry2(function append (x, xs) {
  return _concat.call(xs, [x])
}, 'append : a -> [a] -> [a]')

export default append
