import _defn from './internal/_defn'
import _slice from './internal/_slice'

/**
 * @name dropUntil
 * @signature (a -> Boolean) -> [a] -> [a]
 * @category Collection
 * @since v0.14.0
 * @description
 * Runs a predicate function sequentially through a list, dropping
 * all elements until the predicate returns `true`. Once the predicate
 * returns `true`, the remainder of the list is returned.
 * @see dropWhile
 *
 * @example
 * const isEven = x => x % 2 === 0
 *
 * dropUntil(isEven, [1, 3, 6, 8, 10]) // => [6, 8, 10]
 * dropUntil(isEven, [1, 3, 6, 5, 7])  // => [6, 5, 7]
 */
export default _defn('dropUntil', function (fn, xs) {
  var i = 0

  while (i < xs.length && !fn(xs[i])) i += 1
  return _slice.call(xs, i)
})
