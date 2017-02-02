import _keys from './_keys'
import _reduce from './_reduce'

export default function filterObject (pred, obj) {
  return _reduce(function (acc, key) {
    if (pred(obj[key])) acc[key] = obj[key]
    return acc
  }, {}, _keys(obj))
}
