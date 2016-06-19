import curryN from './curryN'

/**
 * complement : (*... -> Boolean) -> (*... -> Boolean)
 *
 * @since v0.9.0
 */
export default function complement (fn) {
  return curryN(fn.length, function () {
    return !fn.apply(this, arguments)
  })
}
