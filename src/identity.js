import _defn from './internal/_defn'

/**
 * @name identity
 * @signature a -> a
 * @since v0.6.0
 * @description
 * Returns the argument it receives; ignores all but the first argument.
 * Useful for when you simply want to forward a value along.
 *
 * @example
 * identity(5) // => 5
 * const lessThan = a => b => b < a
 *
 * const fn = cond([
 *   [isEven, inc],
 *   [lessThan(10), double],
 *   [T, identity],
 * ])
 *
 * fn(2)  // => 3 (is even, so increment)
 * fn(5)  // => (not even, but < 10, so double)
 * fn(13) // => 13 (else clause, return unmodified)
 */
export default _defn('identity', function (a) {
  return a
})
