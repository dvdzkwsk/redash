import _curry2 from './internal/_curry2'

/**
 * prop : String k -> {k:v} -> v
 *
 * @since v0.1.0
 */
export default _curry2(function prop (k, o) {
  return o[k]
})
