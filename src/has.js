import _hasOwn from './internal/_hasOwn'

/**
 * @name has
 * @category Object
 * @since v0.11.0
 * @description
 * Returns whether or not an object has a key as an own (non-inherited) property.
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
export default function has (k, o) {
  return _hasOwn.call(o, k)
}
