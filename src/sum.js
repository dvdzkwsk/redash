/**
 * @name sum
 * @signature [Number] -> Number
 * @since v0.10.0
 * @description
 * Returns the sum of all elements in a list.
 *
 * @example
 * sum([1, 10, 100]) // => 111
 * sum([])           // => 0
 */
export default function sum (xs) {
  var i   = 0
    , sum = 0

  for (; i < xs.length; i++) {
    sum += xs[i]
  }
  return sum
}
