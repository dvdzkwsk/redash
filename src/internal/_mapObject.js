import _reduce from './_reduce'
import _keys from './_keys'

export default function _mapObject (fn, obj) {
  return _reduce(function (acc, key) {
    acc[key] = fn(obj[key])
    return acc
  }, {}, _keys(obj))
}
