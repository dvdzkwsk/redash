/**
 * @since v0.7.0
 */
var tap = function (fn) {
  return function tapped (a) {
    fn(a)
    return a
  }
}
tap.toString = function toString () {
  return '(a -> *) -> a -> a'
}

export default tap
