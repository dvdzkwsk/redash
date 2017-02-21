import _arity from './_arity'
import _curryN from './_curryN'
import _nameFunc from './_nameFunc'

export default function _defn (name, fn) {
  var arity = fn.length

  switch (arity) {
    case 0:
    case 1:
      return _nameFunc(name, _arity(arity, fn))
    default:
      return _curryN(arity, [], _nameFunc(name, fn))
  }
}
