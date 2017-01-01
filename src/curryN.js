import _curry2 from './internal/_curry2'
import _curryN from './internal/_curryN'

/**
 * @name curryN
 * @signature Integer -> (a, b, ..., n -> v) -> a -> b -> ... -> n -> v
 * @description
 * Curries a function to the provided arity, regardless of its actual arity.
 * @see curry
 *
 * @example
 * const fn = curryN(3, (...args) => console.log(args))
 *
 * fn(1)       // => Function
 * fn(1)(2)    // => Function
 * fn(1, 2, 3) // => [1, 2, 3]
 * fn(1)(2)(3) // => [1, 2, 3]
 */
export default _curry2(function curryN (arity, fn) {
  return _curryN(arity, [], fn)
})
