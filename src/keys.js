/**
 * @name keys
 * @signature {k:v} -> [k]
 * @since v0.1.0
 * @description
 * Returns an array containing all own enumerable properties of an object.
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
export default function keys (object) {
  return Object.keys(object)
}
