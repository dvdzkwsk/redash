import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * @name without
 * @signature [a] -> [a] -> [a]
 * @since v0.7.0
 * @description
 * Excludes all elements of the first array from the second array.
 *
 * @example
 * without([1, 2], [1, 2, 3, 4, 2, 1, 7]) => [3, 4, 7]
 */
export default _curry2(function without (as, bs) {
  var ys    = []
    , bi    = 0
    , aslen = as.length
    , bslen = bs.length
    , ai
    , b
    , discard

  for (; bi < bslen; bi++) {
    b = bs[bi]
    discard = false
    for (ai = 0; ai < aslen; ai++) {
      if (_equals(b, as[ai])) {
        discard = true
        break
      }
    }
    if (!discard) {
      ys.push(b)
    }
  }
  return ys
})
