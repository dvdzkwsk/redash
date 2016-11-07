import _curry3 from './internal/_curry3'
import _push from './internal/_push'
import _slice from './internal/_slice'

/**
 * @name insert
 * @signature Number -> a -> [a] -> [a]
 * @since v0.11.0
 * @description
 * Inserts a value at the given position in an array. This does not replace
 * the current value, but rather shifts it and all following elements forward
 * by one poisition.
 * @see append
 * @see prepend
 *
 * @example
 * insert(1, 5, [0, 1, 2, 3]) // => [0, 5, 1, 2, 3]
 */
export default _curry3(function insert (idx, x, xs) {
  var ys = _slice.call(xs, 0, idx)
  ys[ys.length] = x
  _push.apply(ys, _slice.call(xs, idx))
  return ys
})
