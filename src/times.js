import _curry2 from './internal/_curry2'

/**
 * @since v0.5.0
 */
var times = _curry2(function times (fn, n) {
  var i  = 0
    , bs = []

  for (; i < n; i++) {
    bs.push(fn(i))
  }
  return bs
})
times.toString = function toString () {
  return 'times : (Number -> a) -> Number -> [a]'
}

export default times
