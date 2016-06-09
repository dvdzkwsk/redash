import _curry1 from './internal/_curry1'
import _curry2 from './internal/_curry2'
import _curry3 from './internal/_curry3'
import _curryN from './internal/_curryN'

/**
 * @since v0.1.0
 */
var curry = function curry (fn) {
  switch (fn.length) {
    case 0: return fn
    case 1: return _curry1(fn)
    case 2: return _curry2(fn)
    case 3: return _curry3(fn)
    default: return _curryN(fn.length, [], fn)
  }
}

export default curry
