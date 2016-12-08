/**
 * @name always
 * @signature a -> (Any...) -> a
 * @since v0.9.0
 * @description
 * Takes a single argument and returns a function that, when invoked, always
 * returns that original argument.
 *
 * @example
 * const alwaysTrue = always(true) // => function
 * alwaysTrue()         // => true
 * alwaysTrue(false)    // => true
 * times(alwaysTrue, 5) // => [true, true, true, true, true]
 */
export default function always (x) {
  return function () {
    return x
  }
}
