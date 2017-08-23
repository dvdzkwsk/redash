import _defn from './internal/_defn'

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
export default _defn(function transform (transforms, target) {
  var res = {}
    , key

  for (key in target) {
    if (typeof transforms[key] === 'function') {
      res[key] = transforms[key](target[key])
    } else if (typeof transforms[key] === 'object') {
      res[key] = transform(transforms[key], target[key])
    } else {
      res[key] = target[key]
    }
  }
  return res
})
