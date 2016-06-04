import _curry2 from './internal/_curry2'

var find = _curry2(function find (pred, xs) {
  var i   = 0
    , len = xs.length
    , x

  for (; i < len; i++) {
    x = xs[i]
    if (pred(x)) {
      return x
    }
  }
})

export default find