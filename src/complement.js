/**
 * complement : (*... -> Boolean) -> (*... -> Boolean)
 *
 * @since v0.9.0
 */
export default function complement (fn) {
  return function () {
    return !fn.apply(this, arguments)
  }
}
