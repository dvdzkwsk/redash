import _defn from './internal/_defn'

/**
 * @name assoc
 * @signature String k, Any v => k -> v -> {k:v} -> {k:v}
 * @since v0.6.0
 * @description
 * Applies a value to a given key on an object. You can think of `assoc` as
 * the process of _associating_ a key with a value.
 * Note that the original object is not mutated; a shallow copy is returned.
 * @see dissoc
 * @example
 * const user = { first: 'Chris', last: 'Loblaw' }
 * assoc('first', 'Bob', user) // => { first: 'Bob', last: 'LobLaw' }
 */
export default _defn('assoc', function (k, v, o) {
  var y = {}
    , p

  for (p in o) y[p] = o[p]
  y[k] = v
  return y
})
