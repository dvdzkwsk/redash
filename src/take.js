import _slice from './internal/_slice'
import _curry2 from './internal/_curry2'

/**
 * take : Number -> [a] -> [a]
 *
 * @since v0.1.0
 */
var take = _curry2(function take (n, xs) {
  return _slice.call(xs, 0, n)
})

export default take
