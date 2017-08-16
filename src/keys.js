import _keys from './internal/_keys'
import _defn from './internal/_defn'

/**
 * @name keys
 * @signature {k:v} -> [k]
 * @category Object
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
export default _defn('keys', _keys)
