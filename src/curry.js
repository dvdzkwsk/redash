import curryN from './curryN'

/**
 * @name curry
 * @signature (a, b, ..., j -> v) -> a -> b -> ... -> j -> v
 * @since v0.1.0
 */
export default function curry (fn) {
  return curryN(fn.length, fn)
}
