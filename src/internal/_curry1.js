export default function _curry1 (fn) {
  return function curriedUnaryFunction (a0) {
    return arguments.length ? fn(a0) : curriedUnaryFunction
  }
}
