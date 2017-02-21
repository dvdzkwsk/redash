import _defn from './internal/_defn'
import _equals from './internal/_equals'

/**
 * @name propEq
 * @signature String k -> v -> {k:v} -> Boolean
 * @since v0.1.0
 * @description
 * Gets the value of a given property off of an object and returns
 * whether or not it equals the target value. A deep comparison is
 * used to determine equality.
 *
 * @example
 * propEq('name', 'Michael', { name: 'Michael' }) // => true
 * propEq('data', { id: 1 }, { data: { id: 1 }})  // => true
 */
export default _defn('propEq', function (k, v, o) {
  return _equals(o[k], v)
})
