import _complement from './internal/_complement'
import when from './when'

/**
 * @name unless
 * @category Logic
 * @since v0.14.0
 * @description
 * Creates a unary function that dispatches to the provided function
 * if the predicate returns false for the provided value. If the predicate
 * returns true the argument is passed through unmodified.
 * This is the complement of `when`.
 * @see when
 * @see ifElse
 *
 * @example
 * const doubleIfNotEven = unless(isEven, multiply(2))
 * doubleIfNotEven(3) // => 6
 * doubleIfNotEven(2) // => 2
 */
export default function unless (pred, fn) {
  return when(_complement(pred), fn)
}
