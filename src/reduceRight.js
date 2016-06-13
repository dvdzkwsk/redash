import _curry3 from './internal/_curry3'
import _reduce from './internal/_reduce'
import _reverse from './internal/_reverse'

/**
 * reduceRight : ((b, a) -> b) -> b -> [a]
 *
 * @since v0.1.0
 */
export default _curry3(function reduceRight (fn, y, xs) {
  return _reduce(fn, y, _reverse.call(xs))
})
