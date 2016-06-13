import _curry2 from './internal/_curry2'

/**
 * dissoc : String -> {k:v} -> {k:v}
 *
 * @since v0.10.0
 */
export default _curry2(function dissoc (prop, obj) {
  var y = {}
    , p

  for (p in obj) {
    if (p !== prop) {
      y[p] = obj[p]
    }
  }
  return y
})
