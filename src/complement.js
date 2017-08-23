import _defn from './internal/_defn'
import curryN from './curryN'

/**
 * @name complement
 * @signature (*... -> Boolean) -> (*... -> Boolean)
 * @category Function
 * @since v0.13.0
 * @description
 * Wraps a function so that it returns the complement of its original return value.

 * @example
 * isEven(2)             // => true
 * complement(isEven)(2) // => false
 */
export default _defn(function complement (x) {
  return curryN(x.length, function () {
    return !x.apply(null, arguments)
  })
})
