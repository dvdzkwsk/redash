import _curry3 from './internal/_curry3'
import _push from './internal/_push'
import _slice from './internal/_slice'

/**
 * insert : Number -> a -> [a] -> [a]
 *
 * @since v0.11.0
 */
export default _curry3(function insert (idx, x, xs) {
  var ys = _slice.call(xs, 0, idx)
  ys[ys.length] = x
  _push.apply(ys, _slice.call(xs, idx))
  return ys
})
