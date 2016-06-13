import _curry3 from './internal/_curry3'
import _reverse from './internal/_reverse'
import reduce from './reduce'

/**
 * reduceRight : ((b, a) -> b) -> b -> [a]
 *
 * @since v0.1.0
 */
var reduceRight = _curry3(function reduceRight (fn, y, xs) {
  return reduce.call(this, fn, y, _reverse.call(xs))
})

export default reduceRight
