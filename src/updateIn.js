import _defn from './internal/_defn'
import _shallowClone from './internal/_shallowClone'

/**
 * @name updateIn
 * @signature String k, Any v => [k] -> (v -> v) -> {k:v} -> {k:v}
 * @since v0.20.0
 * @description
 * Applies a transformation to the value at the given path.
 * If the key does not exist, `undefined` is passed as the existing value.
 * s are created for path keys which do not exist.
 * @example
 * const user = { info: { data: { age: 17 } } }
 * updateIn(['info', 'data', 'age'], inc, user) // => { info: { data: { age: 18 } } }
 */
var updateIn = _defn('updateIn', function (path, xform, obj) {
  var res = _shallowClone(obj)
    , key = path[0]

  if (path.length > 1) {
    res[key] = res[key] || {}
    res[key] = updateIn(path.slice(1), xform, res[key])
    return res
  }
  res[key] = xform(res[key])
  return res
})

export default updateIn
