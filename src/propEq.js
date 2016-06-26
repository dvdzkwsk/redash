import _curry3 from './internal/_curry3'

/**
 * propEq : String k -> v -> {k:v} -> Boolean
 *
 * @since v0.1.0
 */
export default _curry3(function propEq (k, v, o) {
  return o[k] === v
})
