import _curry2 from './internal/_curry2'

/**
 * @signature (a -> b) -> [a] -> [b]
 * @since v0.1.0
 */
export default _curry2(function map (fn, as) {
  var bs  = new Array(as.length)
    , i   = 0
    , len = as.length

  for (; i < len; i++) {
    bs[i] = fn(as[i])
  }
  return bs
})
