import _curry2 from './internal/_curry2'

/**
 * @name all
 * @signature (a -> Boolean) -> [a] -> Boolean
 * @since v0.7.0
 */
export default _curry2(function all (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (!fn(xs[i])) {
      return false
    }
  }
  return true
})
