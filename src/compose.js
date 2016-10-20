import _reverse from './internal/_reverse'
import pipe from './pipe'

/**
 * @name compose
 * @signature ((y -> z), ..., (g -> h), (a, b, ..., f -> g)) -> (a, b, ..., f -> z)
 * @since v0.1.0
 * @description
 * Takes a series of functions and wraps them in a single function that
 * invokes the original functions from right to left, passing the result of
 * each function call as the arguments to the next. The result of the leftmost
 * function call is the final return value.
 * @see pipe
 *
 * @example
 * // Composes `sqrt` and `isEven` to produce a function that invokes the
 * // rightmost function (`sqrt`) with the arguments supplied to the composed
 * // function. The result of that function call is then used as the argument
 * // to the next function, `isEven`. Because `isEven` is the last function in
 * // the composition, its result is the final return value.
 * // This would look like: (x) => isEven(sqrt(x))
 * const isSqrtEven = compose(isEven, sqrt)
 *
 * isSqrtEven(9)  // => false
 * isSqrtEven(16) // => true
 *
 * // You can compose more than two functions at a time
 * compose(equals(4), sqrt, double)(8) // => true
 */
export default function compose () {
  return pipe.apply(null, _reverse.call(arguments))
}
