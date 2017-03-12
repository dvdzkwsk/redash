export default function _shallowCloneObject (obj) {
  var res = {}
    , prop

  for (prop in obj) {
    res[prop] = obj[prop]
  }
  return res
}
