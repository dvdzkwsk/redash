import _keys from './internal/_keys'

/**
 * @name keys
 * @signature {k:v} -> [k]
 * @since v0.1.0
 * @description
 * Returns a list containing all own enumerable properties of an object.
 * Note that key order is not guaranteed due to discrepencies between
 * JavaScript engines.
 * @see values
 *
 * @example
 * keys({ a: 1, b: 2, c: 3 }) // => ['a', 'b', 'c']
 *
 * // Ignores inherited properties
 * class A {
 *   foo() {}
 * }
 * const a = new A()
 * keys(a) // => []
 * a.bar = () => {}
 * keys(a) // => ['bar']
 */
export default _keys
