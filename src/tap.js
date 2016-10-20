/**
 * @name tap
 * @signature (a -> *) -> a -> a
 * @since v0.7.0
 * @description
 * Wraps a unary function so that it is called with the argument supplied to
 * it but its return value is ignored and the initial argument is returned
 * instead. This is useful when you want to perform a side effect without
 * interfering with an argument or composition.
 *
 * @example
 * const log = tap(x => console.log(x))
 *
 * // logs: 1, 2, 2, 4, 3, 6, 4, 8
 * map(pipe(log, double, log), [1, 2, 3, 4]) // => [2, 4, 6, 8]
 */
export default function tap (fn) {
  return function (a) {
    fn(a)
    return a
  }
}
