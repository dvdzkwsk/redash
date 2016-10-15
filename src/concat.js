import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * @name concat
 * @signature [a] -> [a] -> [a]
 * @since v0.7.0
 */
export default _curry2(function concat (as, bs) {
  return _concat.call(as, bs)
})
