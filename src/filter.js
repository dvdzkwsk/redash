import _curry2 from './internal/_curry2'

var filter = _curry2(function filter (fn, xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x

  for (; i < len; i++) {
    x = xs[i]
    if (fn(x)) {
      ys.push(x)
    }
  }
  return ys
})

export default filter
