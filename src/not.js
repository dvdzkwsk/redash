import curryN from './curryN'

/**
 * not : Boolean -> Boolean
 * not : (*... -> Boolean) -> (*... -> Boolean)
 *
 * @since v0.6.0
 */
export default function not (x) {
  if (typeof x !== 'function') {
    return !x
  }

  return curryN(x.length, function () {
    return !x.apply(this, arguments)
  })
}
