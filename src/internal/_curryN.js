import _slice from './_slice'

export default function _curryN (arity, applied, fn) {
  return function () {
    var newApplied = applied.concat(_slice.call(arguments))

    return newApplied.length >= arity ?
      fn.apply(null, newApplied) : _curryN(arity, newApplied, fn)
  }
}
