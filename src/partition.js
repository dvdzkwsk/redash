import _defn from './internal/_defn'

/**
 * @name partition
 * @signature (a -> Boolean) -> [a] -> [[a]]
 * @namespace Collection
 * @since v0.16.0
 * @description
 * Partitions a list into two lists based on a predicate; the left contains
 * all values that matched the predicate, while the right includes those which
 * did not.
 *
 * @example
 * partition(isEven, [1, 2, 3, 4, 5]) // => [[2, 4], [1, 3, 5]]
 */
export default _defn('partition', function (pred, xs) {
  var left  = []
    , right = []
    , i     = 0

  for (; i < xs.length; i++) {
    if (pred(xs[i])) {
      left[left.length] = xs[i]
    } else {
      right[right.length] = xs[i]
    }
  }
  return [left, right]
})
