import _curry2 from './internal/_curry2'
import filter from './filter'
import complement from './complement'

/**
 * reject : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function reject (fn, xs) {
  return filter(complement(fn), xs)
})
