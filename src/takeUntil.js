import _curry2 from './internal/_curry2'

var takeUntil = _curry2(function takeUntil (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (fn(xs[i])) {
      return xs.slice(0, i)
    }
  }
  return xs.slice(0)
})

export default takeUntil