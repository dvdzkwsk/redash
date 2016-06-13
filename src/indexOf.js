import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * indexOf : a -> [a] -> Number
 *
 * @since v0.1.0
 */
export default _curry2(function indexOf (y, xs) {
  var _i = -1

  _arrayEach(function (x, i) {
    if (x === y) {
      _i = i
      return true
    }
  }, xs)
  return _i
})
