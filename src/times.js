import _curry2 from './internal/_curry2'

var times = _curry2(function times (fn, n) {
  var i  = 0
    , bs = []

  for (; i < n; i++) {
    bs.push(fn(i))
  }
  return bs
})

export default times
