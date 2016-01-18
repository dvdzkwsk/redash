import _curry2 from './internal/_curry2'

var indexOf = _curry2(function indexOf (y, xs) {
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