import _curry2 from './internal/_curry2'

/**
 * @name mapi
 * @signature ((a, Integer) -> b) -> [a] -> [b]
 * @since v0.16.0
 * @description
 * Applies a transformation function to all elements in an array, returning
 * a new array containing the results of those transformations. This is the
 * same as `map`, but provides the index of the each element as an additional
 * argument to the transformation function.
 * @see map
 *
 * @example
 * const xform = (x, idx) => idx % 2 === 0 ? x * 2 : x
 * mapIndexed(xform, [1, 2, 3, 4, 5]) => [2, 2, 6, 4, 5]
 */
export default _curry2(function mapi (fn, as) {
  var bs  = new Array(as.length)
    , i   = 0
    , len = as.length

  for (; i < len; i++) {
    bs[i] = fn(as[i], i)
  }
  return bs
})
