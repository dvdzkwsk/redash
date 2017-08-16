import _slice from './internal/_slice'
import _defn from './internal/_defn'

/**
 * @name take
 * @signature Integer -> [a] -> [a]
 * @category Collection
 * @since v0.1.0
 * @description
 * Returns a list containing the first N elements of the target list.
 * If N is greater than the length of the list, all elements are returned.
 * @see drop
 * @see takeWhile
 * @see takeUntil
 *
 * @example
 * take(3, [1, 2, 3, 4, 5]) // => [1, 2, 3]
 * take(5, [1, 2, 3])       // => [1, 2, 3]
 * take(Infinity, [])       // => []
 */
export default _defn('take', function (n, xs) {
  return _slice.call(xs, 0, n)
})
