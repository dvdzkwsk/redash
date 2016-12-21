import _reverse from './internal/_reverse'
import isType from './isType'
import type from './type'
import pipe from './pipe'

/**
 * @name compose
 * @signature [(y -> z), ..., (b -> c), (a -> b)] -> a -> z
 * @since v0.1.0
 * @description
 * Takes a list of functions and wraps them in a single, curried function
 * that, when called, invokes the original functions from right to left,
 * passing the result of each function call as the argument to the next. The
 * result of the leftmost function call is the final return value.
 * This is the same concept as `pipe`, but runs the functions from right -> left.
 * Note that all functions except for the first (rightmost) must be unary
 * (accept only a single argument), because functions can only return a single
 * value.
 * @see pipe
 *
 * @example
 * // Composes `sqrt` and `isEven` to produce a function that invokes the
 * // rightmost function (`sqrt`) with the arguments supplied to the composed
 * // function. The result of that function call is then used as the argument
 * // to the next function, `isEven`. Because `isEven` is the last function in
 * // the composition, its result is the final return value.
 * // This would look like: (x) => isEven(sqrt(x))
 * const isSqrtEven = compose([isEven, sqrt])
 *
 * isSqrtEven(9)  // => false
 * isSqrtEven(16) // => true
 *
 * // You can compose more than two functions at a time
 * compose(equals(4), sqrt, double)(8) // => true
 */
export default function compose (fns) {
  var i = 0

  // TODO(zuko): abstract for use in other functions and disable in production.
  for (; i < fns.length; i++) {
    if (!isType('function', fns[i])) {
      throw new TypeError(
        'Invalid argument supplied to `compose`. The value at index ' +
        '[' + i + '] was not a function; what was received was of type: ' +
        type(fns[i]) + '.'
      )
    }
  }
  return pipe(_reverse.call(fns))
}
