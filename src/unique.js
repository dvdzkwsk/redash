import _Set from './internal/_Set'

/**
 * @name unique
 * @category Collection
 * @since v0.19.0
 * @description
 * Returns a new list with all duplicate values removed. Objects are compared
 * by value and not by reference.
 *
 * @example
 * unique([1, 1, 2, 2, 3, 3]) // => [1, 2, 3]
 */
export default function unique (xs) {
  var i   = 0
    , res = []
    , set = new _Set()

  for (; i < xs.length; i++) {
    if (set.add(xs[i])) {
      res[res.length] = xs[i]
    }
  }
  set.clear()
  return res
}
