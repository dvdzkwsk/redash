/**
 * @since v0.7.0
 */
var tap = function (fn) {
  return function tapped (a) {
    fn(a)
    return a
  }
}

export default tap
