var _curry1 = function _curry1 (fn, signature) {
  var curried = function __redash_arity_1__ (a0) {
    return arguments.length ? fn(a0) : __redash_arity_1__
  }
  if (signature) {
    curried.toString = function toString () {
      return signature
    }
  }
  return curried
}

export default _curry1