import _slice from './internal/_slice'
import _reverse from './internal/_reverse'

/**
 * @signature [a] -> [a]
 * @since v0.1.0
 */
export default function reverse (xs) {
  return _reverse.call(_slice.call(xs, 0))
}
