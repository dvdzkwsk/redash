import _defn from './internal/_defn'

/**
 * @name prop
 * @signature String k -> {k:v} -> v
 * @since v0.1.0
 * @description
 * Returns the value of a given property on an object.
 *
 * @example
 * prop('name', {})              // => undefined
 * prop('name', { name: 'Bob' }) // => Bob
 */
export default _defn('prop', function prop (k, o) {
  return o[k]
})
