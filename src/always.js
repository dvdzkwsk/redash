/**
 * @name always
 * @signature a -> * -> a
 * @since v0.9.0
 * @description
 * Takes a single argument and returns a function that, when invoked, always
 * returns that original argument.
 *
 * @example
 * const alwaysTrue = always(true) // => function
 * alwaysTrue()      // => true
 * alwaysTrue(false) // => true
 *
 * @example
 * times(always(1), 5) // => [1, 1, 1, 1, 1]
 */
export default function always (x) {
  return function () {
    return x
  }
}
