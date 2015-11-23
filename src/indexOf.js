import _curryN from './internal/_curryN'

var indexOf = _curryN(2, [], function indexOf (y, xs) {
  var i   = 0
    , len = xs.length
      
  for (; i < len; i++) {
    if (xs[i] === y) {
      return i
    }
  }
  return -1
})

export default indexOf