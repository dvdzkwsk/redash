import _defn from './internal/_defn'
import _contains from './internal/_contains'

/**
 * @name unique
 * @signature [a] -> [a]
 * @since v0.19.0
 * @description
 * Returns a new list with all duplicate values removed. Objects are compared
 * by value and not by reference.
 *
 * @example
 * unique([1, 1, 2, 2, 3, 3]) // => [1, 2, 3]
 */
//  TODO(zuko): super naive, improve algorithm
//  TODO(zuko): support objects
//  TODO(zuko): if we enforce all elements to be of the same type, we can
//  reliably hash primitives for better performance
export default _defn('unique', function (xs) {
  var i   = 0
    , res = []

  for (; i < xs.length; i++) {
    if (!_contains(xs[i], res)) {
      res[res.length] = xs[i]
    }
  }
  return res
})
