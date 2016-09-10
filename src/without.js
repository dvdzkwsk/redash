import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * without : [a] -> [a] -> [a]
 *
 * TODO(zuko): if lists are hashable, create hash to improve lookup speed
 * TODO(zuko): could we just use a Map?
 *
 * @since v0.7.0
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
