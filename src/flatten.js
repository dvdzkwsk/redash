import _arrayEach from './internal/_arrayEach'
import reduce from './reduce'

/**
 * flatten : [[a]] -> [a]
 *
 * @since v0.1.0
 */
export default reduce(function flatten (acc, x) {
  if (Array.isArray(x)) {
    _arrayEach(function (x_) {
      acc.push(x_)
    }, x)
  } else {
    acc.push(x)
  }
  return acc
}, [])
