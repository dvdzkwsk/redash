import _curry2 from './internal/_curry2'

/**
 * mapIndexed : ((a, Number) -> b) -> [a] -> [b]
 *
 * @description
 * Applies a transformation to every item in an array, returning a new
 * array of the same size where each item has been transformed.
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
