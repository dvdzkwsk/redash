import _curry2 from './internal/_curry2'

/**
 * dissoc : String k -> {k:v} -> {k:v}
 *
 * @since v0.10.0
 */
export default _curry2(function dissoc (k, kv) {
  var y = {}
    , p

  for (p in kv) {
    if (p !== k) {
      y[p] = kv[p]
    }
  }
  return y
})
