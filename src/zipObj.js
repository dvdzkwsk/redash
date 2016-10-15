import _curry2 from './internal/_curry2'

/**
 * @signature [k] -> [v] -> {k:v}
 * @since v0.3.0
 */
export default _curry2(function zipObj (ks, vs) {
  var i   = 0
    , len = Math.min(ks.length, vs.length)
    , kv  = {}

  for (; i < len; i++) {
    kv[ks[i]] = vs[i]
  }
  return kv
})
