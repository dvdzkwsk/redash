import _defn from './internal/_defn'

/**
 * @name everyPred
 * @signature [(a -> Boolean)] -> a -> Boolean
 * @namespace Logic
 * @since v0.22.0
 * @description
 * Returns true if every predicate returns true for the given input.
 *
 * @example
 * const evenAndLessThanTen = everyPred([
 *  isEven,
 *  isLessThanTen,
 * ])
 * evenAndLessThanTen(4)  // => true (12 is even)
 * evenAndLessThanTen(7)  // => false (7 is odd)
 * evenAndLessThanTen(12) // => false (12 is even but > 10)
 */
export default _defn('everyPred', function (predicates, x) {
  var i = 0

  for (; i < predicates.length; i++) {
    if (!predicates[i](x)) {
      return false
    }
  }
  return true
})
