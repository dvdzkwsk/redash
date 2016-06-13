import _curry2 from './internal/_curry2'

/**
 * reject : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
var reject = _curry2(function reject (fn, xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x

  for (; i < len; i++) {
    x = xs[i]
    if (!fn(x)) {
      ys.push(x)
    }
  }
  return ys
})

export default reject
