import _curry2 from './internal/_curry2'

/**
 * @name any
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @since v0.7.0
 * @description
 * Tests a predicate against all items in a list. Returns true if the predicate
 * returns true for any item, otherwise returns false. Short circuits once
 * a true condition is found. If the list is empty it will return false.
 *
 * @example
 * const isEven = x => x % 2 === 0
 *
 * any(isEven, [1, 2, 3, 4, 5]) // => true, 2 is an even number
 * any(isEven, [1, 3, 5])       // => false, no numbers are even
 * any(isEven, [])              // => false
 */
export default _curry2(function any (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (fn(xs[i])) {
      return true
    }
  }
  return false
})
