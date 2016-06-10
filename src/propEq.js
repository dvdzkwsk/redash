import _curry3 from './internal/_curry3'

/**
 * @since v0.1.0
 */
var propEq =  _curry3(function propEq (p, y, x) {
  return x[p] === y
}, 'propEq : String -> * -> {k:v} -> Boolean')

export default propEq