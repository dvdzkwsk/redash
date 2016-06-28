import _curry3 from './internal/_curry3'
import _slice from './internal/_slice'

/**
 * insert : Number -> a -> [a] -> [a]
 *
 * @since v0.11.0
 */
export default _curry3(function insert (idx, x, xs) {
  var ys = _slice.call(xs)

  ys[idx] = x
  return ys
})
