import _curry2 from './internal/_curry2'

/**
 * @name findIndex
 * @signature (a -> Boolean) -> [a] -> Number
 * @since v0.1.0
 * @description
 * Tests a predicate against an array, returning the index of the first
 * vakye that matches that predicate. If no matching value is found, `-1` is
 * returned.
 * @see find
 * @see findLast
 *
 * @example
 * find(isEven, [1, 3, 4, 6]) // => 2  (4 is the first even number)
 * find(isEven, [1, 3, 5, 7]) // => -1
 */
export default _curry2(function findIndex (pred, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (pred(xs[i])) {
      return i
    }
  }
  return -1
})
