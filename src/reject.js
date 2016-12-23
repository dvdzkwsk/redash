import _curry2 from './internal/_curry2'

/**
 * @name reject
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.1.0
 * @description
 * Returns a subset of a list which excludes all items for which the
 * predicate function returned true. This is the inverse of `filter` and is
 * equivalent to `filter(complement(predicate))`.
 *
 * @example
 * reject(isEven, [1, 2, 3, 4, 5]) // => [1, 3, 5]
 */
export default _curry2(function reject (pred, as) {
  var i   = 0
    , len = as.length
    , res = []
    , a

  while (i < len) {
    a = as[i++]
    if (!pred(a)) {
      res[res.length] = a
    }
  }
  return res
})
