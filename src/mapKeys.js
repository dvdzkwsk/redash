import _keys from './internal/_keys'
import _reduce from './internal/_reduce'

/**
 * @name mapKeys
 * @category Object
 * @since v0.15.0
 * @description
 * Iterates over all own, enumerable keys of an object, transforming each
 * key with the provided function.
 * @see mapValues
 *
 * @example
 * mapKeys(prepend('myKey_'), { a: 1, b: 2 }) // => { myKey_a: 1, myKey_b: 2 }
 */
export default function mapKeys (fn, obj) {
  return _reduce(function (acc, key) {
    acc[fn(key)] = obj[key]
    return acc
  }, {}, _keys(obj))
}
