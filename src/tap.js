/**
 * tap : (a -> b) -> a -> a
 *
 * @since v0.7.0
 */
var tap = function (fn) {
  return function (a) {
    fn(a)
    return a
  }
}

export default tap
