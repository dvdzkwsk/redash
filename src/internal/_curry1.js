var _curry1 = function _curry1 (fn) {
  return function __arity_1__ (a0) {
    return arguments.length ? fn(a0) : __arity_1__
  }
}

export default _curry1