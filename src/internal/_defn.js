import _curryN from './_curryN'

export default function _defn (fn) {
  switch (fn.length) {
    case 0:
    case 1:
      return fn
    default:
      return _curryN(fn.length, [], fn)
  }
}
