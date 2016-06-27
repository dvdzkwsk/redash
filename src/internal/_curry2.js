import _curry1 from './_curry1'

export default function _curry2 (fn) {
  return function curriedBinaryFunction (a0, a1) {
    switch (arguments.length) {
      case 0: return curriedBinaryFunction
      case 1: return _curry1(function curriedUnaryFunction (b0) {
        return fn(a0, b0)
      })
      default: return fn(a0, a1)
    }
  }
}
