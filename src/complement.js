/**
 * @since v0.9.0
 */
var complement = function complement (fn) {
  return function () {
    return !fn.call(this, arguments)
  }
}

export default complement
