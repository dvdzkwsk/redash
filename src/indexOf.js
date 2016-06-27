import _curry2 from './internal/_curry2'

/**
 * indexOf : a -> [a] -> Number
 *
 * @since v0.1.0
 */
export default _curry2(function indexOf (a, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (xs[i] === a) {
      return i
    }
  }
  return -1
})
