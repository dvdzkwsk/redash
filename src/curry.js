import curryN from './curryN'

/**
 * curry : (a, b, ..., j -> v) -> a -> b -> ... -> j -> v
 *
 * @since v0.1.0
 */
var curry = function curry (fn) {
  return curryN(fn.length, fn)
}

export default curry
