import curryN from './curryN'
import _slice from './internal/_slice'
import _reverse from './internal/_reverse'

/**
 * flip : (a -> b -> c -> ... -> z) -> (z -> ... -> c -> b -> a)
 *
 * @since v0.10.0
 */
export default function flip (fn) {
  return curryN(fn.length, function () {
    return fn.apply(this, _reverse.call(arguments))
  })
}
