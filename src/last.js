/**
 * @since v0.1.0
 */
var last = function last (xs) {
  return xs[xs.length - 1]
}
last.toString = function toString () {
  return 'last : [a] -> a'
}

export default last
