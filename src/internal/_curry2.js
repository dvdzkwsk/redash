import _curry1 from './_curry1'

export default function _curry2 (fn) {
  return function recurry (a0, a1) {
    switch (arguments.length) {
      case 0: return recurry
      case 1: return _curry1(function (b1) {
        return fn(a0, b1)
      })
      default: return fn(a0, a1)
    }
  }
}
