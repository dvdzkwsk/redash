/**
 * @name sum
 * @signature [Number] -> Number
 * @since v0.10.0
 * @description
 * Returns the sum of all elements in an array.
 *
 * @example
 * sum([1, 10, 100]) // => 111
 * sum([])           // => 0
 */
export default function sum (xs) {
  var i   = 0
    , len = xs.length
    , sum = 0

  for (; i < len; i++) {
    sum += xs[i]
  }
  return sum
}
