import _curry2 from './internal/_curry2'

/**
 * without : [a] -> [a] -> [a]
 *
 * @since v0.7.0
 */
var without = _curry2(function without (as, bs) {
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
      if (b == as[ai]) {
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

export default without
