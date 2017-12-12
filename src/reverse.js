import _slice from './internal/_slice'
import _reverse from './internal/_reverse'

/**
 * @name reverse
 * @category Collection
 * @since v0.1.0
 * @description
 * Reverses the order of elements in a list.
 *
 * @example
 * reverse([1, 2, 3, 4]) // => [4, 3, 2, 1]
 * reverse('hello')      // => 'olleh'
 */
export default function reverse (xs) {
  return typeof xs === 'string'
    ? _reverse.call(xs.split('')).join('')
    : _reverse.call(_slice.call(xs))
}
