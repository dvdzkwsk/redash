import _curry1 from './_curry1'
import _curry2 from './_curry2'

export default function _curry3 (fn) {
  return function recurry (a0, a1, a2) {
    switch (arguments.length) {
      case 0: return recurry
      case 1: return _curry2(function (b1, b2) {
        return fn(a0, b1, b2)
      })
      case 2: return _curry1(function (b2) {
        return fn(a0, a1, b2)
      })
      default: return fn(a0, a1, a2)
    }
  }
}
