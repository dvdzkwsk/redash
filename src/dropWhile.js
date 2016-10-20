import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * @name dropWhile
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.14.0
 * @description
 * Runs a predicate function sequentially through an array, dropping
 * all elements until the predicate returns `false`. Once the predicate
 * returns `false`, the remainder of the array is returned. This can
 * be thought of as `dropUntil(complement(predicate))`.
 * @see dropUntil
 *
 * @example
 * dropWhile(isEven, [1, 2, 5, 7, 8]) // => [5, 7, 9]
 */
export default _curry2(function dropWhile (fn, xs) {
  var i   = 0
    , len = xs.length

  while (i < len && fn(xs[i])) i += 1
  return _slice.call(xs, i)
})
