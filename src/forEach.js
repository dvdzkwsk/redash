import _curry2 from './internal/_curry2'

var forEach = _curry2(function forEach (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    fn(xs[i], i);
  }
})

export default forEach