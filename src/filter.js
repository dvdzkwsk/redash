import _filterList from './internal/_filterList'
import _filterObject from './internal/_filterObject'
import _defn from './internal/_defn'
import isType from './isType'

/**
 * @name filter
 * @signature
 * (a -> Boolean) -> [a] -> [a]
 * String k, Any v => (v -> Boolean) -> {k:v} -> {k:v}
 * @category Collection
 * @since v0.1.0
 * @description
 * Returns a list of the values for which the predicate returned true.
 * @see reject
 *
 * @example
 * filter(isEven, [1, 2, 3, 4, 5]) // => [2, 4]
 */
export default _defn(function filter (pred, xs) {
  return isType('Object', xs)
    ? _filterObject(pred, xs)
    : _filterList(pred, xs)
})
