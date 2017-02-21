import _defn from './internal/_defn'
import _hasOwn from './internal/_hasOwn'

/**
 * @name has
 * @signature String k -> {k:v} -> Boolean
 * @since v0.11.0
 * @description
 * Checks whether an object has the provided key as an own property.
 *
 * @example
 * has('name', { name: 'Bill' }) // => true
 *
 * // Ignores inherited properties
 * class A {
 *   foo () {}
 * }
 * const a = new A()
 * has('foo', a) // => false
 */
export default _defn('has', function (k, o) {
  return _hasOwn.call(o, k)
})
