import _concat from './internal/_concat'
import _curry2 from './internal/_curry2'

/**
 * append : a -> [a] -> [a]
 *
 * TODO(zuko): implement as conj?
 * TODO(zuko): how should strings be handled?
 *
 * @since v0.10.0
 */
export default _curry2(function append (x, xs) {
  return _concat.call(xs, x)
})
