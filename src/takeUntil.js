import _complement from './internal/_complement'
import takeWhile from './takeWhile'

/**
 * @name takeUntil
 * @category Collection
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
export default function takeUntil (fn, xs) {
  return takeWhile(_complement(fn), xs)
}
