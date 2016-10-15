import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * @signature a -> [a] -> a
 * @since v0.14.0
 */
export default _curry2(function prepend (a, as) {
  return _concat.call([a], as)
})
