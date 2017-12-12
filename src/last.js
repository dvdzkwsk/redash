/**
 * @name last
 * @category Collection
 * @since v0.1.0
 * @description
 * Returns the last value in a list. If the list is empty, returns `undefined`.
 * @see head
 * @see init
 * @see tail
 *
 * @example
 * last([1, 2, 3, 4]) // => 4
 */
export default function last (xs) {
  return xs[xs.length - 1]
}
