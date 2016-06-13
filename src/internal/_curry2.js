import _curry1 from './_curry1'

export default function _curry2 (fn) {
  return function __curried_binary__ (a0, a1) {
    switch (arguments.length) {
      case 0: return __curried_binary__
      case 1: return _curry1(function __curried_unary__ (b0) {
        return fn(a0, b0)
      })
      default: return fn(a0, a1)
    }
  }
}
