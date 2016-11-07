import _curry2 from './internal/_curry2'

/**
 * @name when
 * @signature (a -> Boolean) -> (a -> *) -> a -> *
 * @since v0.14.0
 * @description
 * Creates a unary function that compares its argument against the predicate
 * function, and, if it is met, calls the transformation function and returns
 * its result. If the predicate is not matched, the original argument is
 * returned.
 * You can think of `when` as shorthand for `ifElse(predicate, xform, identity)`,
 * though keep in mind that it only supports unary functions.
 * @see ifElse
 *
 * @example
 * const doubleIfEven = when(isEven, multiply(2))

 * doubleIfEven(4) // => 8
 * doubleIfEven(5) // => 5
 * map(doubleIfEven, [1, 2, 3, 4, 5]) // => [1, 4, 3, 8, 5]
 */
export default _curry2(function when (pred, fn) {
  return function (x) {
    return pred(x) ? fn(x) : x
  }
})
