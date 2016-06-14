import _concat from './internal/_concat'
import reduce from './reduce'

/**
 * flattenDeep : [[a]] -> [a]
 *
 * @since v0.5.0
 */
var _flattenDeep = reduce(function flattenDeep (acc, x) {
  return _concat.call(
    acc,
    Array.isArray(x) ? _flattenDeep(x) : x
  )
}, [])

export default _flattenDeep
