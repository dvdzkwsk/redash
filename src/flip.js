import curryN from './curryN'
import _reverse from './internal/_reverse'

/**
 * @name flip
 * @signature (a -> b -> c -> ... -> z) -> z -> ... -> c -> b -> a
 * @since v0.10.0
 */
export default function flip (fn) {
  return curryN(fn.length, function () {
    return fn.apply(null, _reverse.call(arguments))
  })
}
