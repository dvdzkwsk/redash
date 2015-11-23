import _curryN from './internal/_curryN'

var takeUntil = _curryN(2, [], function takeUntil (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (fn(xs[i], i)) {
      return xs.slice(0, i)
    }
  }
  return xs.slice(0)
})

export default takeUntil