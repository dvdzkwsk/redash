import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * @name drop
 * @signature Number -> Array -> Array
 * @since v0.10.0
 */
export default _curry2(function drop (n, xs) {
  return _slice.call(xs, n)
})
