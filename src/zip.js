import _curry2 from './internal/_curry2'

var zip = _curry2(function zip (as, bs) {
  var i   = 0
    , len = Math.min(as.length, bs.length)
    , ys  = new Array(len)

  for (; i < len; i++) {
    ys[i] = [as[i], bs[i]]
  }
  return ys
})

export default zip
