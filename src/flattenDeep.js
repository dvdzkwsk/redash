import _concat from './internal/_concat'
import _arrayEach from './internal/_arrayEach'

/**
 * flattenDeep : [[a]] -> [a]
 *
 * @since v0.5.0
 */
export default function flattenDeep (xs) {
  var ys = []

  _arrayEach(function (x) {
    if (Array.isArray(x)) {
      ys = _concat.call(ys, flattenDeep(x))
    } else {
      ys.push(x)
    }
  }, xs)

  return ys
}
