import _defn from './internal/_defn'
import _reverse from './internal/_reverse'
import _createFnName from './internal/_createFnName'
import _nameFunc from './internal/_nameFunc'
import pipe from './pipe'

/**
 * @name compose
 * @signature [(y -> z), ..., (b -> c), (a -> b)] -> a -> z
 * @category Function
 * @since v0.1.0
 * @description
 * Composes a list of functions into a single curried function that invokes
 * the functions from right to left, passing the result of each call as the
 * argument to the next, returning the result of the leftmost function.
 * Note that all functions except for the first (rightmost) must be unary
 * because functions can only return a single value.
 * @see pipe
 *
 * @example
 * // composed functions are evaluated from right -> left
 * const fn = compose([Math.sqrt, inc])
 *
 * // e.g. Math.sqrt(inc(16))
 * fn(15) // => true
 */
export default _defn('compose', function (fns) {
  return _nameFunc(_createFnName('compose', [fns]), pipe(_reverse.call(fns)))
})
