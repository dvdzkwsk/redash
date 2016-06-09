import _curry3 from './internal/_curry3'

/**
 * @since v0.1.0
 */
var reduce = _curry3(function reduce (fn, y, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    y = fn(y, xs[i])
  }
  return y
})

export default reduce