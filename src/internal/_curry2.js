import _curry1 from './_curry1'

var _curry2 = function _curry2 (fn) {
  return function __arity_2__ (a0, a1) {
    switch (arguments.length) {
      case 0: return __arity_2__
      case 1: return _curry1(function __arity_1__ (b0) { return fn(a0, b0) })
      default: return fn(a0, a1)
    }
  }
}

export default _curry2