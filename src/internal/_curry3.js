import _curry1 from './_curry1'
import _curry2 from './_curry2'

export default function _curry3 (fn) {
  return function curriedTernaryFunction (a0, a1, a2) {
    var ctx = this

    switch (arguments.length) {
      case 0: return curriedTernaryFunction
      case 1: return _curry2(function curriedBinaryFunction (_a1, _a2) {
        return fn.call(ctx, a0, _a1, _a2)
      })
      case 2: return _curry1(function curriedUnaryFunction (_a2) {
        return fn.call(ctx, a0, a1, _a2)
      })
      default: return fn.call(ctx, a0, a1, a2)
    }
  }
}
