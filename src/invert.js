import _defn from './internal/_defn'
import _hasOwn from './internal/_hasOwn'

/**
 * @name invert
 * @signature String k, Any v => {k:v} -> {v:k}
 * @category Object
 * @since v0.21.0
 * @description
 * Inverts an object by swapping key/value pairs. Duplicate values will be
 * overriden.
 *
 * @example
 * invert({ a: 1, b: 2 }) // => { 1: a, 2: b }
 */
export default _defn(function invert (target) {
  var res = {}
    , key

  for (key in target) {
    if (_hasOwn.call(target, key)) {
      res[target[key]] = key
    }
  }
  return res
})
