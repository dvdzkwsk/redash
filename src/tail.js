/**
 * @since v0.1.0
 */
var tail = function tail (xs) {
  return xs.slice(1)
}
tail.toString = function toString () {
  return 'tail : [a] -> [a]'
}

export default tail