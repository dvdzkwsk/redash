import _curry2 from './internal/_curry2'

var any = _curry2(function any (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (fn(xs[i])) {
      return true
    }
  }
  return false
})

export default any
