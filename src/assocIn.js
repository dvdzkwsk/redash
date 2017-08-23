import _defn from './internal/_defn'
import always from './always'
import updateIn from './updateIn'

/**
 * @name assocIn
 * @signature String k, Any v => [k] -> v -> {k:v} -> {k:v}
 * @category Object
 * @since v0.22.0
 * @description
 * Similar to `assoc`, but takes a path rather than a single key. Traverses
 * the path on the target object and applies the value to the final key. Nested
 * objects found along the path are shallowly copied.
 * @see dissoc
 * @example
 * const model = { user: { age: 21 } }
 * assocIn(['user', 'age'], 42, user) // => { user: { age: 42 } }
 */
export default _defn(function assocIn (path, value, target) {
  return updateIn(path, always(value), target)
})
