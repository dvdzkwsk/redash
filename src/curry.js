import _defn from './internal/_defn'
import curryN from './curryN'

/**
 * @name curry
 * @signature (a, b, ..., j -> v) -> a -> b -> ... -> j -> v
 * @category Function
 * @since v0.1.0
 * @description
 * Curries a function based on its reported arity, which is determined by its `length`
 * property. Curried functions keep track of the arguments they've received, returning
 * new curried functions until all arguments have been received. Once all arguments are
 * fully supplied, the original function is applied to those arguments.
 *
 * To curry a function to a fixed arity use [curryN](#curryn).
 *
 * @see curryN
 *
 * @example
 * const addThreeNums = curry((a, b, c) => a + b + c)
 * addThreeNums(5)        // => Function
 * addThreeNums(5, 10, 2) // => 17
 * addThreeNums(5)(2)(3)  // => 10
 *
 * const add5 = addThreeNums(5)
 * const add8 = add5(3) // => Function
 * add8(2) // => 10
 */
export default _defn(function curry (fn) {
  return curryN(fn.length, fn)
})
