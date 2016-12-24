/**
 * @name head
 * @signature [a] -> a
 * @since v0.1.0
 * @description
 * Returns the first element in a list. If the list is empty, `undefined`
 * is returned.
 *
 * @example
 * head([1, 2, 3, 4]) // => [1]
 */
export default function head (xs) {
  return xs[0]
}
