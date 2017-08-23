import _defn from './internal/_defn'
import _shallowClone from './internal/_shallowClone'

/**
 * @name assoc
 * @signature String k, Any v => k -> v -> {k:v} -> {k:v}
 * @category Object
 * @since v0.6.0
 * @description
 * Applies a value to a given key on an object. You can think of `assoc` as
 * the process of _associating_ a key with a value. Note that a shallow copy
 * of the object is returned.
 * @see dissoc
 * @example
 * const user = { first: 'Chris', last: 'Loblaw' }
 * assoc('first', 'Bob', user) // => { first: 'Bob', last: 'LobLaw' }
 */
export default _defn(function assoc (key, value, target) {
  var res = _shallowClone(target)
  res[key] = value
  return res
})
