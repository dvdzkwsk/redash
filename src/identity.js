/**
 * @since v0.6.0
 */
var identity = function (a) {
  return a
}
identity.toString = function toString () {
  return 'identity : a -> a'
}

export default identity
