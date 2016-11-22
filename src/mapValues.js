import _curry2 from './internal/_curry2'
import _reduce from './internal/_reduce'

/**
 * @name mapValues
 * @signature (a -> b) -> {k:a} -> {k:b}
 * @since v0.15.0
 * @description
 * Iterates over all own, enumerable keys of an object, applying the
 * transformation function to the value associated with each key. Returns
 * a new object with the same keys mapped to the new values.
 * @see mapKeys
 *
 * @example
 * mapValues(multiply(2), { a: 1, b: 2, c: 3 }) // => { a: 2, b: 4, c: 6 }
 */
export default _curry2(function mapValues (fn, obj) {
  return _reduce(function (acc, key) {
    acc[key] = fn(obj[key])
    return acc
  }, {}, Object.keys(obj))
})
