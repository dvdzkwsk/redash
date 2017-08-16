import _defn from './internal/_defn'
import _slice from './internal/_slice'

/**
 * @name init
 * @signature [a] -> [a]
 * @namespace Collection
 * @since v0.17.0
 * @description
 * Returns a list that contains all but the last value from the input list.
 * @see head
 * @see tail
 *
 * @example
 * init([])              // => []
 * init([1])             // => []
 * init([1, 2, 3, 4, 5]) // => [1, 2, 3, 4]
 */
export default _defn('init', function (xs) {
  return _slice.call(xs, 0, xs.length - 1)
})
