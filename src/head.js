/**
 * @name head
 * @category Collection
 * @since v0.1.0
 * @description
 * Returns the first value in a list. If the list is empty, returns `undefined`.
 * @see last
 * @see init
 * @see tail
 *
 * @example
 * head([1, 2, 3, 4]) // => [1]
 * head([])           // => undefined
 */
export default function head (xs) {
  return xs[0]
}
