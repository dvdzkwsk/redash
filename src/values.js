import _defn from './internal/_defn'

/**
 * @name values
 * @signature String k, Any v => {k:v} -> [v]
 * @category Object
 * @since v0.14.0
 * @description
 * Returns a list containing the values of an object's own enumerable properties.
 * Note that this ignores all inherited properties, and does not guarantee
 * order due to discrepencies between JavaScript engines.
 *
 * @example
 * values({ a: 1, b: 2, c: 3 }) // => [1, 2, 3]
 * values({})                   // => []
 *
 * // Inherited properties are ignored
 * class A {
 *   foo() {}
 * }
 * const a = new A()
 * a.bar = 'BAR'
 * values(a) // => ['BAR'] (foo is inherited from A's protoype and is ignored)
 */
export default _defn('values', function (obj) {
  var keys   = Object.keys(obj)
    , i      = 0
    , values = new Array(keys.length)

  while (i < keys.length) {
    values[i] = obj[keys[i]]
    i += 1
  }
  return values
})
