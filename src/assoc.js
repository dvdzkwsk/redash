import _curry3 from './internal/_curry3'

/**
 * @since v0.6.0
 */
var assoc = _curry3(function assoc (p, v, o) {
  var b = {}
    , prop

  for (prop in o) {
    b[prop] = o[prop]
  }
  b[p] = v
  return b
}, 'assoc : String -> * -> {k:v} -> {k:v}')

export default assoc
