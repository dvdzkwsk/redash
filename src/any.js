import _defn from './internal/_defn'

/**
 * @name any
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @since v0.7.0
 * @description
 * Tests a predicate against all items in a list. Returns true if the predicate
 * returns true for any item, otherwise returns false. Short circuits once
 * a true condition is found. If the list is empty it will return false.
 * @see all
 *
 * @example
 * any(isEven, [1, 2, 3, 4, 5]) // => true, 2 is an even number
 * any(isEven, [1, 3, 5])       // => false, no numbers are even
 * any(isEven, [])              // => false
 */
export default _defn('any', function (fn, xs) {
  var i = 0

  for (; i < xs.length; i++) {
    if (fn(xs[i])) {
      return true
    }
  }
  return false
})
