import _defn from './internal/_defn'

/**
 * @name when
 * @signature (a -> Boolean) -> (a -> b) -> a -> a | b
 * @category Logic
 * @since v0.14.0
 * @description
 * Creates a unary function that, when invoked, checks its argument against
 * the predicate function. If the predicate returns true, the handler function
 * is called and its result returned. If the predicate returns false, the
 * original argument is returned unmodified.
 * You can think of `when` as shorthand for `ifElse(predicate, xform, identity)`,
 * though keep in mind that it only supports unary functions.
 * @see ifElse
 * @see unless
 * @example
 * const doubleIfEven = when(isEven, multiply(2))
 *
 * doubleIfEven(4) // => 8
 * doubleIfEven(5) // => 5
 * map(doubleIfEven, [1, 2, 3, 4, 5]) // => [1, 4, 3, 8, 5]
 */
export default _defn(function when (pred, fn) {
  return function (x) {
    return pred(x) ? fn(x) : x
  }
})
