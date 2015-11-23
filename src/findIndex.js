import _curryN from './internal/_curryN'

var findIndex = _curryN(2, [], function findIndex (pred, xs) {
  var i   = 0
    , len = xs.length
      
  for (; i < len; i++) {
    if (pred(xs[i])) {
      return i
    }
  }
  return -1
})

export default findIndex