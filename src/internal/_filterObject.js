import _hasOwn from './_hasOwn'

export default function filterObject (pred, obj) {
  var res = {}
    , key

  for (key in obj) {
    if (_hasOwn.call(obj, key)) {
      if (pred(obj[key])) {
        res[key] = obj[key]
      }
    }
  }
  return res
}
