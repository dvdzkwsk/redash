import _curry3 from './internal/_curry3'

var assoc = _curry3(function assoc (p, v, o) {
  var b = {}
    , prop

  for (prop in o) {
    b[prop] = o[prop]
  }
  b[p] = v
  return b
})

export default assoc
