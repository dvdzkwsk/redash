import _slice from './_slice'
import _arity from './_arity'

export default function _curryN (arity, applied, fn) {
  return _arity(arity, function () {
    var newApplied = applied.concat(_slice.call(arguments))

    return newApplied.length >= arity
      ? fn.apply(null, newApplied)
      : _curryN(arity, newApplied, fn)
  })
}
