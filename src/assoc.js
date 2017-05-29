import _defn from './internal/_defn'
import _shallowCloneObject from './internal/_shallowCloneObject'

/**
 * @name assoc
 * @signature String k, Any v => k -> v -> {k:v} -> {k:v}
 * @since v0.6.0
 * @description
 * Applies a value to a given key on an object. You can think of `assoc` as
 * the process of _associating_ a key with a value.
 * Note that the original object is not mutated; a shallow copy is returned.
 * @see dissoc
 * @example
 * const user = { first: 'Chris', last: 'Loblaw' }
 * assoc('first', 'Bob', user) // => { first: 'Bob', last: 'LobLaw' }
 */
export default _defn('assoc', function (key, value, target) {
  var res = _shallowCloneObject(target)
  res[key] = value
  return res
})
