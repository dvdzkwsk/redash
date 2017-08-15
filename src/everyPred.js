import _defn from './internal/_defn'

/**
 * @name everyPred
 * @signature [(a -> Boolean)] -> a -> Boolean
 * @since v0.22.0
 * @description
 * Runs a series of predicates against an input, returning true if they all pass.
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
