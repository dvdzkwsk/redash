import _curry2 from './internal/_curry2'

/**
 * @name all
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @since v0.7.0
 * @description
 * Tests a predicate against all items in a list. Returns true if the predicate
 * returns true for all items in the list, otherwise returns false. If the list
 * is empty it will return true.
 *
 * @example
 * const isEven = x => x % 2 === 0
 *
 * all(isEven, [2, 4, 6, 8])  // => true
 * all(isEven, [2, 4, 6, 3])  // => false, 3 is not an even number
 * all(isEven, [])            // => true
 */
export default _curry2(function all (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (!fn(xs[i])) {
      return false
    }
  }
  return true
})
