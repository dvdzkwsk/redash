import _slice from './internal/_slice'
import _reverse from './internal/_reverse'

/**
 * @name reverse
 * @signature [a] -> [a]
 * @since v0.1.0
 * @description
 * Reverses the order of elements in a list.
 *
 * @example
 * reverse([1, 2, 3, 4]) // => [4, 3, 2, 1]
 */
export default function reverse (xs) {
  return _reverse.call(_slice.call(xs))
}
