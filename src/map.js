import _curry2 from './internal/_curry2'

var map = _curry2(function map (fn, xs) {
  var i   = 0
    , len = xs.length
    , ys  = new Array(len)

  for (; i < len; i++) {
    ys[i] = fn(xs[i], i)
  }
  return ys
})

export default map