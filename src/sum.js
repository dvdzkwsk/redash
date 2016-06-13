/**
 * @since v0.10.0
 */
var sum = function sum (xs) {
  var i   = 0
    , len = xs.length
    , y

  for (; i < len; i++) {
    y += xs[i]
  }
  return y
}
sum.toString = function toString () {
  return 'sum : [Number] -> Number'
}

export default sum
