import _defn from './internal/_defn'
import curryN from './curryN'

/**
 * @name complement
 * @signature (*... -> Boolean) -> (*... -> Boolean)
 * @since v0.13.0
 * @description
 * Wraps a function and returns a new function, when called, invokes the
 * original function and returns the complement of its result. For example,
 * if the original function were to return `true` its complement would return
 * `false`.
 *
 * @example
 * isEven(2) // => true
 * complement(isEven)(2) // => false
 *
 * const isOdd = complement(isEven)
 * isOdd(3) // => true
 */
export default _defn('complement', function (x) {
  return curryN(x.length, function () {
    return !x.apply(null, arguments)
  })
})
