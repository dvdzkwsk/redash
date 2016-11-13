/**
 * @name max
 * @signature [Number] -> Number
 * @since v0.14.0
 * @description
 * Returns the greatest number from a list of numbers.
 * @see min
 * @example
 * max([1, 2, 3, 4, 5]) // => 5
 */
export default function max (xs) {
  var i   = xs.length - 1
    , max = xs[i--]

  while (i >= 0) {
    if (xs[i] > max) {
      max = xs[i]
    }
    i--
  }
  return max
}
