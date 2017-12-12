import _shallowClone from './internal/_shallowClone'

/**
 * @name assoc
 * @category Object
 * @since v0.6.0
 * @description
 * Sets the value of a property on an object. You can think of `assoc` as
 * the process of _associating_ a key with a value. Note that a shallow copy
 * of the object is returned.
 * @see assocIn
 * @see dissoc
 * @example
 * const user = { first: 'Chris', last: 'Loblaw' }
 * assoc('first', 'Bob', user) // => { first: 'Bob', last: 'LobLaw' }
 */
export default function assoc (key, value, target) {
  var res = _shallowClone(target)
  res[key] = value
  return res
}
