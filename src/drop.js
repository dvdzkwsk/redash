import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * @name drop
 * @signature Integer -> [a] -> [a]
 * @since v0.10.0
 * @description
 * Returns an array with the first N elements removed. If N exceeds the length
 * of the array, an empty array will be returned.
 *
 * @example
 * drop(2, [1, 2, 3, 4]) // => [3, 4]
 *
 * @example
 * drop(5, [1, 2, 3, 4]) // => []
 */
export default _curry2(function drop (n, xs) {
  return _slice.call(xs, n)
})
