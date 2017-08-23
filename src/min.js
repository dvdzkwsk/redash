import _defn from './internal/_defn'

/**
 * @name min
 * @signature [Number] -> Number
 * @category Relation
 * @since v0.14.0
 * @description
 * Returns the smallest number from a list.
 *
 * @see min
 * @example
 * min([1, 2, 3, 4, 5]) // => 1
 */
export default _defn(function min (xs) {
  var i   = xs.length - 1
    , min = xs[i--]

  while (i >= 0) {
    if (xs[i] < min) {
      min = xs[i]
    }
    i--
  }
  return min
})
