import _curry2 from './internal/_curry2'

/**
 * @signature (a -> [b]) -> [a] -> [b]
 * @since v0.1.0
 */
export default _curry2(function chain (fn, xs) {
  var i   = 0
    , len = xs.length
    , bs  = []
    , _i
    , b

  for (; i < len; i++) {
    b = fn(xs[i])
    if (Array.isArray(b)) {
      for (_i = 0; _i < b.length; _i++) {
        bs.push(b[_i])
      }
    } else {
      bs.push(b)
    }
  }

  return bs
})
