import _slice from './internal/_slice'

/**
 * tail : [a] -> [a]
 *
 * @since v0.1.0
 */
var tail = function tail (xs) {
  return _slice.call(xs, 1)
}

export default tail
