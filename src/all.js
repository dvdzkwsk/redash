import _defn from './internal/_defn'

/**
 * @name all
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @category Collection
 * @since v0.7.0
 * @description
 * Returns true if the predicate returns true for every value in a list, otherwise false.
 * If the list is empty it will return true; see [vacuous truth](https://en.wikipedia.org/wiki/Vacuous_truth).
 *
 * @see any
 * @see everyPred
 *
 * @example
 * all(isEven, [2, 4, 6, 8]) // => true
 * all(isEven, [2, 4, 6, 3]) // => false, 3 is not an even number
 * all(isEven, [])           // => true
 */
export default _defn(function all (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (!fn(xs[i])) {
      return false
    }
  }
  return true
})
