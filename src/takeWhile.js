import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * @name takeWhile
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.12.0
 * @description
 * Returns a list containing values from the original list up until the
 * point at which the predicate returned false. This is done by iterating
 * through the original list and testing each value in turn against the
 * predicate function; as soon as the predicate returns false, all future
 * values are discarded, and only the values before the one that failed are
 * selected.
 * If the predicate function holds true for all values in the list, a copy
 * of the entire list is returned.
 * @see takeUntil
 *
 * @example
 * takeWhile(isEven, [2, 4, 6, 7, 8]) // => [2, 4, 6]
 * takeWhile(isEven, [1, 3, 2, 4, 6]) // => []
 */
export default _curry2(function takeWhile (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (!fn(xs[i])) {
      return _slice.call(xs, 0, i)
    }
  }
  return _slice.call(xs)
})
