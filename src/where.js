import _defn from './internal/_defn'
import _hasOwn from './internal/_hasOwn'

/**
 * @name where
 * @signature String k, (Any -> Boolean) Spec => {k:Spec} -> Boolean
 * @since v0.15.0
 * @description
 * Checks whether an object matches a given spec. A spec is defined by
 * an object where each key/value represents the key to check, and the
 * predicate to run for that key. An object is said to have matched a spec
 * when every predicate returns true.
 *
 * @example
 * const pred = where({ name: equals('Michael') })
 * pred({ name: 'Michael' }) // => true
 * pred({ name: 'Dwight' })  // => false
 *
 * const people = [{ age: 12 }, { age: 14 }, { age: 18 }, { age: 22 }]
 * filter(where({ age: gte(18) }), people) // => [{ age: 18 }, { age: 22 }]
 */
export default _defn('where', function (spec, obj) {
  var prop

  for (prop in spec) {
    if (
      _hasOwn.call(spec, prop) &&
      !spec[prop](obj[prop])
    ) return false
  }
  return true
})
