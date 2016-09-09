import assoc from './assoc'
import lens from './lens'
import prop from './prop'

/**
 * lensProp : String -> Lens
 *
 * @since v0.11.0
 *
 * @param {String} key - the key to focus on.
 * @returns {Lens} a lens focused on the provided key.
 */
export default function lensProp (key) {
  return lens(prop(key), assoc(key))
}
