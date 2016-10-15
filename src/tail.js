import _slice from './internal/_slice'

/**
 * @signature [a] -> [a]
 * @since v0.1.0
 */
export default function tail (xs) {
  return _slice.call(xs, 1)
}
