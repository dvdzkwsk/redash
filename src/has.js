import _curry2 from './internal/_curry2'
import _hasOwn from './internal/_hasOwn'

/**
 * @signature String k -> {k:v} -> Boolean
 * @since v0.11.0
 */
export default _curry2(function as (k, o) {
  return _hasOwn.call(o, k)
})
