import _defn from './internal/_defn'
import curryN from './curryN'

/**
 * @name complement
 * @signature (*... -> Boolean) -> (*... -> Boolean)
 * @since v0.13.0
 * @description
 * Wraps a function so that when it is called, its
 * the complement of the original
 *
 * Wraps a function in one that invokes the wrapped function and returns
 * the complement of its result.
 *
 * @example
 * isEven(2)             // => true
 * complement(isEven)(2) // => false
 */
export default _defn('complement', function (x) {
  return curryN(x.length, function () {
    return !x.apply(null, arguments)
  })
})
