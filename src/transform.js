import _defn from './internal/_defn'
import _hasOwn from './internal/_hasOwn'

/**
 * @name transform
 * @signature String k, Any v => {k: (v -> v)} -> {k:v} -> {k:v}
 * @category Object
 * @since v0.18.0
 * @description
 * Recursively applies property-based transforms to the target object's own
 * properties. Transforms defined for non-existent properties are ignored,
 * and properties without a corresponding transform are passed through
 * unmodified.
 * @example
 * transform(
 *   { name: toUpper, details: { location: toUpper } },
 *   {
 *     name: 'joe',
 *     details: {
 *       age: 20,
 *       location: 'usa'
 *     }
 *   }
 * ) // => { name: 'JOE', details: { age: 40, location: 'USA' } }
 */
export default _defn(function transform (transforms, obj) {
  var res = {}
    , prop

  for (prop in obj) {
    if (_hasOwn.call(obj, prop) && _hasOwn.call(transforms, prop)) {
      if (typeof transforms[prop] === 'object') {
        res[prop] = transform(transforms[prop], obj[prop])
      } else if (typeof transforms[prop] === 'function') {
        res[prop] = transforms[prop](obj[prop])
      } else {
        throw new Error(
          'Invalid transformation supplied under the key "' + prop + '". ' +
          'Transformation must be either a function or object, but was ' +
          '"' + typeof transforms[prop] + '".'
        )
      }
    } else {
      res[prop] = obj[prop]
    }
  }
  return res
})
