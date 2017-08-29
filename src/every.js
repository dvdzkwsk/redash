import _defn from './internal/_defn'

/**
 * @name every
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @category Collection
 * @since v0.7.0
 * @description
 * Returns true if `pred(x)` returns true for every `x` in a list, otherwise false.
 * If the list is empty it will return true; see [vacuous truth](https://en.wikipedia.org/wiki/Vacuous_truth).
 *
 * @see some
 * @see everyPred
 *
 * @example
 * every(isEven, [2, 4, 6, 8]) // => true
 * every(isEven, [2, 4, 6, 3]) // => false, 3 is not an even number
 * every(isEven, [])           // => true
 */
export default _defn(function every (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (!fn(xs[i])) {
      return false
    }
  }
  return true
})
