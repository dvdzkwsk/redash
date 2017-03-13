import _defn from './internal/_defn'
import _equals from './internal/_equals'

/**
 * @name getEq
 * @signature String k => k -> v -> {k:v} -> Boolean
 * @since v0.20.0
 * @description
 * Gets the value of a given property off of an object and returns
 * whether or not it equals the target value. A deep comparison is
 * used to determine equality.
 *
 * @example
 * getEq('name', 'Michael', { name: 'Michael' }) // => true
 * getEq('data', { id: 1 }, { data: { id: 1 }})  // => true
 */
export default _defn('getEq', function (key, value, obj) {
  return _equals(obj[key], value)
})
