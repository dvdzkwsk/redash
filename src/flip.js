import _defn from './internal/_defn'
import _reverse from './internal/_reverse'
import curryN from './curryN'

/**
 * @name flip
 * @signature (a -> b -> c -> ... -> z) -> z -> ... -> c -> b -> a
 * @since v0.10.0
 * @description
 * Wraps a function so that when it is invoked its arguments are applied in
 * reverse order. Note that `flip` produces a curried function.
 *
 * @example
 * const fn = flip((a, b, c) => [a, b, c])
 * fn('A', 'B', 'C') // => ['C', 'B', 'A']
 * fn('a')('b')('c') // => ['c', 'b', 'a']
 */
export default _defn('flip', function (fn) {
  return curryN(fn.length, function () {
    return fn.apply(null, _reverse.call(arguments))
  })
})
