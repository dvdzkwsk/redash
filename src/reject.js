import _curryN from './internal/_curryN'

var reject = _curryN(2, [], function reject (fn, xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x

  for (; i < len; i++) {
    x = xs[i]
    if (!fn(x, i)) {
      ys.push(x)
    }
  }
  return ys
})

export default reject