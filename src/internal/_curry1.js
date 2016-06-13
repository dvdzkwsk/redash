var _curry1 = function _curry1 (fn) {
  var curried = function __redash_arity_1__ (a0) {
    return arguments.length ? fn(a0) : __redash_arity_1__
  }
  return curried
}

export default _curry1
