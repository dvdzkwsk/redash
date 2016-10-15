import curryN from './curryN'

/**
 * @signature (*... -> Boolean) -> (*... -> Boolean)
 * @since v0.13.0
 */
export default function complement (x) {
  return curryN(x.length, function asComplement () {
    return !x.apply(null, arguments)
  })
}
