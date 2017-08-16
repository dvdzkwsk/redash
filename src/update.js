import _defn from './internal/_defn'
import updateIn from './updateIn'

/**
 * @name update
 * @signature String k, Any v => k -> (v -> v) -> {k:v} -> {k:v}
 * @category Object
 * @since v0.20.0
 * @description
 * Applies a transformation to the value associated with the provided key.
 * If the key does not exist, `undefined` is passed as the existing value.
 * @example
 * const user = { first: 'Chris', last: 'Loblaw' }
 * update('first', toUpper, user) // => { first: 'BOB', last: 'LobLaw' }
 */
export default _defn('update', function (key, xform, obj) {
  return updateIn([key], xform, obj)
})
