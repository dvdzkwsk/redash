import _defn from './internal/_defn'
import _get from './internal/_get'

/**
 * @name get
 * @signature String k => k -> {k:v} -> v
 * @category Object
 * @since v0.20.0
 * @description
 * Returns the value associated with the provided key on an object.
 *
 * @example
 * get('name', null)            // => undefined
 * get('name', { name: 'Bob' }) // => Bob
 */
export default _defn(_get)
