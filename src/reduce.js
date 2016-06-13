import _arrayEach from './internal/_arrayEach'
import _curry3 from './internal/_curry3'

/**
 * reduce : ((b, a) -> b) -> b -> [a]
 *
 * @since v0.1.0
 */
export default _curry3(function reduce (fn, b, as) {
  _arrayEach(function (a) {
    b = fn(b, a)
  }, as)
  return b
})
