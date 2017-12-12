import _equals from './internal/_equals'
import _hasOwn from './internal/_hasOwn'

/**
 * @name matches
 * @category Logic
 * @since v0.22.0
 * @description
 * Determines whether an object matches a given spec. Similar to `where`, but compares
 * the spec against the target by performing a partial deep comparison.
 *
 * @example
 * const spec = { name: 'Michael' }
 * matches(spec, { name: 'Michael' }) // => true
 * matches(spec, { name: 'Dwight' })  // => false
 */
export default function matches (spec, target) {
  var prop

  if (!target) {
    return false
  }

  for (prop in spec) {
    if (_hasOwn.call(spec, prop)) {
      if (typeof spec[prop] === 'object') {
        if (!matches(spec[prop], target[prop])) {
          return false
        }
      } else if (!_equals(spec[prop], target[prop])) {
        return false
      }
    }
  }
  return true
}
