import _curry2 from './internal/_curry2'
import complement from './complement'
import filter from './filter'

/**
 * reject : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function reject (fn, xs) {
  return filter(complement(fn), xs)
})
