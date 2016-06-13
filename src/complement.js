/**
 * complement : (*... -> Boolean) -> (*... -> Boolean)
 *
 * @since v0.9.0
 */
var complement = function complement (fn) {
  return function () {
    return !fn.apply(this, arguments)
  }
}

export default complement
