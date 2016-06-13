import _curry3 from './internal/_curry3'

/**
 * assoc : String -> * -> {k:v} -> {k:v}
 *
 * @since v0.6.0
 */
export default _curry3(function assoc (k, v, o) {
  var y = {}
    , p

  for (p in o) {
    b[p] = o[p]
  }
  b[k] = v
  return b
})
