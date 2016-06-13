import _curry2 from './internal/_curry2'

/**
 * indexOf : a -> [a] -> Number
 *
 * @since v0.1.0
 */
export default _curry2(function indexOf (y, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (xs[i] === y) {
      return i
    }
  }
  return -1
})
