import _concat from './internal/_concat'
import _curry2 from './internal/_curry2'

/**
 * @signature a -> [a] -> [a]
 * @since v0.10.0
 */
export default _curry2(function append (x, xs) {
  return _concat.call(xs, x)
})
