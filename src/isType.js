import _defn from './internal/_defn'
import _type from './type'

/**
 * @name isType
 * @signature (String | Function) -> Boolean
 * @category Logic
 * @since v0.13.0
 * @description
 * Returns whether or not a value is of an expected. If the provided type is
 * a string, a `typeof` check is used. If a constructor is passed it will
 * be compared against the value's constructor.
 *
 * @example
 * const isString = isType('string')
 *
 * isString('hello!')    // => true
 * isType('number', 123) // => true
 */
export default _defn('isType', function (type, a) {
  if (type == null) {
    return typeof type === typeof a
  }

  return typeof type === 'string'
    ? _type(a).toLowerCase() === type.toLowerCase()
    : a instanceof type || a.constructor === type
})
