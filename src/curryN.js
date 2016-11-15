import _curry1 from './internal/_curry1'
import _curry2 from './internal/_curry2'
import _curry3 from './internal/_curry3'
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
  switch (arity) {
    case 0: return fn
    case 1: return _curry1(fn)
    case 2: return _curry2(fn)
    case 3: return _curry3(fn)
    default: return _curryN(arity, [], fn)
  }
})
