import _defn from './internal/_defn'

/**
 * @name sum
 * @signature [Number] -> Number
 * @category Math
 * @since v0.10.0
 * @description
 * Returns the sum of all elements in a list.
 *
 * @example
 * sum([1, 10, 100]) // => 111
 * sum([])           // => 0
 */
export default _defn(function sum (xs) {
  var i   = 0
    , sum = 0

  for (; i < xs.length; i++) {
    sum += xs[i]
  }
  return sum
})
