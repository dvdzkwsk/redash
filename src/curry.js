import _curryN from './internal/_curryN'

var curry = function curry (fn) {
  return _curryN(fn.length, [], fn)
}

export default curry
