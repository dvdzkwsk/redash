import _curry1 from './internal/_curry1'
import _curry2 from './internal/_curry2'
import _curry3 from './internal/_curry3'
import _curryN from './internal/_curryN'

/**
 * curryN : Number n -> (a, b, ..., n -> v) -> a -> b -> ... -> n -> v
 *
 * @since v0.1.0
 */
export default _curry2(function curryN (arity, fn) {
  switch (arity) {
    case 0: return fn
    case 1: return _curry1(fn)
    case 2: return _curry2(fn)
    case 3: return _curry3(fn)
    default: return _curryN(fn.length, [], fn)
  }
})
