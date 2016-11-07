import assoc from './assoc'
import lens from './lens'
import prop from './prop'

/**
 * @name lensProp
 * @signature String -> Lens
 * @since v0.11.0
 * @description
 * Creates a Lens that is focused on a given property. The getter and setter
 * for the created lens do not mutate the target object.
 * @see lens
 * @see over
 * @see set
 * @see view
 * @example
 * const nameLens = lensProp('name')
 * const bob = { name: 'Bob' }
 *
 * view(nameLens, bob)      // => 'Bob'
 * set(nameLes, 'Joe', bob) // => { name: 'Joe' }
 * console.log(bob)         // => { name: 'Bob' }
 */
export default function lensProp (key) {
  const res = lens(prop(key), assoc(key))
  res.toString = function () {
    return 'Lens(' + key + ')'
  }
  return res
}
