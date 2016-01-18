import _curry1 from './_curry1'
import _curry2 from './_curry2'

var _curry3 = function _curry3 (fn) {
  return function __arity_3__ (a0, a1, a2) {
    switch (arguments.length) {
      case 0: return __arity_3__
      case 1: return _curry2(function __arity_2__ (_a1, _a2) { return fn(a0, _a1, _a2) })
      case 2: return _curry1(function __arity_1__ (_a2) { return fn(a0, a1, _a2) })
      default: return fn(a0, a1, a2)
    }
  }
}

export default _curry3