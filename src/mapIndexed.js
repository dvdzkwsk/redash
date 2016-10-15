import _curry2 from './internal/_curry2'

/**
 * @name mapIndexed
 * @signature ((a, Number) -> b) -> [a] -> [b]
 * @since v0.12.0
 */
export default _curry2(function mapIndexed (fn, as) {
  var bs  = new Array(as.length)
    , i   = 0
    , len = as.length

  for (; i < len; i++) {
    bs[i] = fn(as[i], i)
  }
  return bs
})
