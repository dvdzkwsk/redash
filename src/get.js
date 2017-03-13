import _defn from './internal/_defn'

/**
 * @name get
 * @signature String k => k -> {k:v} -> v
 * @since v0.20.0
 * @description
 * Returns the value associated with the provided key on an object.
 *
 * @example
 * get('name', {})              // => undefined
 * get('name', { name: 'Bob' }) // => Bob
 */
export default _defn('get', function (key, obj) {
  return obj[key]
})
