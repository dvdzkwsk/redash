import _defn from './internal/_defn'
import _slice from './internal/_slice'

/**
 * @name insert
 * @signature Number -> a -> [a] -> [a]
 * @since v0.11.0
 * @description
 * Inserts a value at the given position in a list. This does not replace
 * the current value, but rather shifts it and all following elements forward
 * by one poisition.
 * @see append
 * @see prepend
 *
 * @example
 * insert(1, 5, [0, 1, 2, 3]) // => [0, 5, 1, 2, 3]
 */
export default _defn('insert', function (idx, x, xs) {
  var ys = _slice.call(xs, 0, idx)
  ys[ys.length] = x
  return ys.concat(_slice.call(xs, idx))
})
