export default function _curry1 (fn) {
  return function curriedUnaryFunction (a0) {
    return arguments.length ? fn.call(this, a0) : curriedUnaryFunction
  }
}
