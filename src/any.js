import _defn from './internal/_defn'

/**
 * @name any
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @namespace Collection
 * @since v0.7.0
 * @description
 * Returns true if the predicate returns true for any value in a list, otherwise false.
 *
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
