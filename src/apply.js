/**
 * @name apply
 * @category Function
 * @since v0.24.0
 * @description
 * Applies a list of arguments to a function.
 *
 * @example
 * const add3 = (a, b, c) => a + b + c
 *
 * apply(add3, [1, 2, 3]) => 6
 */
export default function apply (fn, args) {
  return fn.apply(null, args)
}
