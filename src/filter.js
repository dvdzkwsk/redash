import _curry2 from './internal/_curry2'

/**
 * @name filter
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.1.0
 * @description
 * Filters a list by calling the predicate function with each element in the
 * list. If the predicate returns a truthy value, the element is kept in
 * the new array, otherwise it is discarded.
 * @see reject
 *
 * @example
 * filter(isEven, [1, 2, 3, 4, 5]) // => [2, 4]
 */
export default _curry2(function filter (pred, as) {
  var i   = 0
    , len = as.length
    , res = []
    , a

  while (i < len) {
    a = as[i++]
    if (pred(a)) {
      res[res.length] = a
    }
  }
  return res
})
