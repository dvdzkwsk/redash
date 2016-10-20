import _curry2 from './internal/_curry2'

/**
 * @name prop
 * @signature String k -> {k:v} -> v
 * @since v0.1.0
 * @description
 * Returns the value of a given property on an object.
 *
 * @example
 * prop('name', { name: 'Bob' }) // => Bob
 * prop('name', {})              // => undefined
 */
export default _curry2(function prop (k, o) {
  return o[k]
})
