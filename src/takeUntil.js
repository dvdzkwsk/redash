import _defn from './internal/_defn'
import complement from './complement'
import takeWhile from './takeWhile'

/**
 * @name takeUntil
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.12.0
 * @description
 * Selects values from the input list by comparing them against the predicate.
 * Values are included in the output list so long as they do not fulfill the
 * predicate. Once the predicate returns true, that value and the rest of
 * the list is discarded.
 *
 * If the predicate never returns true, a copy of the entire list is returned.
 * @see takeWhile
 *
 * @example
 * takeUntil(isEven, [1, 3, 5, 2, 7]) // => [1, 3, 5]
 */
export default _defn('takeUntil', function (fn, xs) {
  return takeWhile(complement(fn), xs)
})
