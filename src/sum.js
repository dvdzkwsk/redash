/**
 * @signature [Number] -> Number
 * @since v0.10.0
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
