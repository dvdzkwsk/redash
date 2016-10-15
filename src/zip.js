import _curry2 from './internal/_curry2'

/**
 * @signature [a] -> [b] -> [[a, b]]
 * @since v0.3.0
 */
export default _curry2(function zip (as, bs) {
  var i   = 0
    , len = Math.min(as.length, bs.length)
    , abs = new Array(len)

  for (; i < len; i++) {
    abs[i] = [as[i], bs[i]]
  }
  return abs
})
