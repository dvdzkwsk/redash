import _curry2 from './internal/_curry2'

/**
 * any : (a -> Boolean) -> [a] -> Boolean
 *
 * @since v0.7.0
 */
export default _curry2(function any (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (fn(xs[i])) {
      return true
    }
  }
  return false
})
