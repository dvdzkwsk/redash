import tap from './tap'

/**
 * @name trace
 * @category Function
 * @since v0.18.0
 * @description
 * Creates a unary function that will log out the provided message along with its
 * argument before returning that argument unmodified. This performs a side-effect
 * (logging) and is useful for debugging composed functions by allowing you to
 * trace how values change over time. Trace is solely meant as developer utility.
 * @example
 * map(pipe([
 *   add(1),
 *   trace('value after add'),
 *   multiply(2),
 *   trace('value after multiply')
 * ]), [1, 2, 3, 4])
 * // => [4, 6, 8, 10]
 * // Logs:
 * // value after add 2
 * // value after add 3
 * // ...
 * // value after multiply 10
 */
export default function trace (message) {
  return tap(function (x) {
    console.log(message, x)
  })
}
