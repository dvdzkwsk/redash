/**
 * @since v0.7.0
 */
var of = function of (x) {
  return [x]
}
of.toString = function toString () {
  return 'of : a -> [a]'
}

export default of
