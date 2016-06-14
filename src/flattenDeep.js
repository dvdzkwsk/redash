import _concat from './internal/_concat'
import reduce from './reduce'

/**
 * flattenDeep : [[a]] -> [a]
 *
 * @since v0.5.0
 */
var flattenDeep = reduce(function flattenDeep (acc, x) {
  if (Array.isArray(x)) {
    return _concat.call(acc, flattenDeep(x))
  }
  acc.push(x)
  return acc
}, [])

export default flattenDeep
