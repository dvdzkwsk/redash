import _curryN from './_curryN'

export default function _complement (fn) {
  return _curryN(fn.length, [], function () {
    return !fn.apply(null, arguments)
  })
}
