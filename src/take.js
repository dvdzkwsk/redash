import _slice from './internal/_slice'
import _curry2 from './internal/_curry2'

/**
 * @name take
 * @signature Integer -> [a] -> [a]
 * @since v0.1.0
 * @description
 * Returns an array containing the first N elements of the target array.
 * If N is greater than the length of the array, all elements are returned.
 * @see drop
 * @see takeWhile
 * @see takeUntil
 *
 * @example
 * take(3, [1, 2, 3, 4, 5]) // => [1, 2, 3]
 * take(5, [1, 2, 3])       // => [1, 2, 3]
 * take(Infinity, [])       // => []
 */
export default _curry2(function take (n, xs) {
  return _slice.call(xs, 0, n)
})
