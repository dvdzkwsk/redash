import _slice from './internal/_slice'
import _curry2 from './internal/_curry2'

/**
 * take : Number -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function take (n, xs) {
  return _slice(xs, 0, n)
})
