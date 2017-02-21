import _defn from './internal/_defn'

/**
 * @name identity
 * @signature a -> a
 * @since v0.6.0
 * @description
 * Unary function that returns the argument it receives. Useful for when
 * you simply want to forward an argument along.
 *
 * @example
 * identity(5) // => 5
 *
 * const doubleIfEven = when(isEven, multiply(2))
 * doubleIfEven(2) // => 4
 * doubleIfEven(3) // => 3
 */
export default _defn('identity', function (a) {
  return a
})
