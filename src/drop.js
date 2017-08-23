import _defn from './internal/_defn'
import _slice from './internal/_slice'

/**
 * @name drop
 * @signature Integer -> [a] -> [a]
 * @category Collection
 * @since v0.10.0
 * @description
 * Returns a list with the first N elements removed. If N exceeds the length
 * of the list, an empty list will be returned.
 *
 * @example
 * drop(2, [1, 2, 3, 4]) // => [3, 4]
 */
export default _defn(function drop (n, xs) {
  return _slice.call(xs, n)
})
