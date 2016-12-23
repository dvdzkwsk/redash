import _slice from './internal/_slice'

/**
 * @name init
 * @signature [a] -> [a]
 * @since v0.17.0
 * @description
 * Returns all but the last element in a list.
 * @see head
 * @see tail
 *
 * @example
 * init([])              // => []
 * init([1])             // => []
 * init([1, 2, 3, 4, 5]) // => [1, 2, 3, 4]
 */
export default function init (xs) {
  return _slice.call(xs, 0, xs.length - 1)
}
