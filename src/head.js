/**
 * @since v0.1.0
 */
var head = function head (xs) {
  return xs[0]
}
head.toString = function toString () {
  return 'head : [a] -> a'
}

export default head
