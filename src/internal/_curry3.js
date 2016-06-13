import _curry1 from './_curry1'
import _curry2 from './_curry2'

export default function _curry3 (fn) {
  return function _curried_ternary__ (a0, a1, a2) {
    switch (arguments.length) {
      case 0: return _curried_ternary__
      case 1: return _curry2(function __curried_binary__ (_a1, _a2) {
        return fn(a0, _a1, _a2)
      })
      case 2: return _curry1(function __curried_unary__ (_a2) {
        return fn(a0, a1, _a2)
      })
      default: return fn(a0, a1, a2)
    }
  }
}
