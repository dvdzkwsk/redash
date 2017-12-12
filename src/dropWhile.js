import _slice from './internal/_slice'

/**
 * @name dropWhile
 * @category Collection
 * @since v0.14.0
 * @description
 * Runs a predicate function sequentially through a list, dropping
 * all elements until the predicate returns `false`. Once the predicate
 * returns `false`, the remainder of the list is returned. This can
 * be thought of as `dropUntil(complement(predicate))`.
 * @see dropUntil
 *
 * @example
 * dropWhile(isEven, [2, 4, 6, 7, 8]) // => [7, 8]
 */
export default function dropWhile (fn, xs) {
  var i = 0

  while (i < xs.length && fn(xs[i])) i += 1
  return _slice.call(xs, i)
}
