import _arrayEach from './internal/_arrayEach'

/**
 * flatten : [[a]] -> [a]
 *
 * @since v0.1.0
 */
export default function flatten (xs) {
  var ys = []

  _arrayEach(function (x) {
    if (Array.isArray(x)) {
      _arrayEach(function (x_) {
        ys.push(x_)
      }, x)
    } else {
      ys.push(x)
    }
  }, xs)
  return ys
}
