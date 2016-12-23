import curryN from './curryN'

/**
 * @name curry
 * @signature (a, b, ..., j -> v) -> a -> b -> ... -> j -> v
 * @since v0.1.0
 * @description
 * Curries a function based on its arity, which is determined via its `length`
 * property. Curried functions continue to accept arguments up until the number
 * of total arguments supplied to it meet or exceed its arity, at which point
 * the original function is called with those arguments.
 * If you wish to curry a function to a different or fixed arity, such as with
 * variadic functions, use [curryN](#curryn).
 * @see curryN
 *
 * @example
 * const add = curry((a, b, c) => a + b + c)
 * add(5)        // => Function
 * add(5, 10, 2) // => 17
 * add(5)(2)(3)  // => 10
 *
 * const add5 = add(5)
 * add5(3, 2) // => 10
 *
 * const add7 = add(5, 2)
 * add7(3) // => 10
 *
 * const add8 = add5(3)
 * add8(2) // => 10
 * add8(0) // => 8
 */
export default function curry (fn) {
  return curryN(fn.length, fn)
}
