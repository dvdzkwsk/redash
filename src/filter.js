import _filterList from './internal/_filterList'
import _filterObject from './internal/_filterObject'
import _curry2 from './internal/_curry2'
import isType from './isType'

/**
 * @name filter
 * @signature
 * (a -> Boolean) -> [a] -> [a]
 * String k, Any v => (v -> Boolean) -> {k:v} -> {k:v}
 * @since v0.1.0
 * @description
 * Filters a list by calling the predicate function with each element in the
 * list. If the predicate returns a truthy value, the element is kept in
 * the new list, otherwise it is discarded.
 * @see reject
 *
 * @example
 * filter(isEven, [1, 2, 3, 4, 5]) // => [2, 4]
 */
export default _curry2(function filter (pred, xs) {
  return isType('Object', xs)
    ? _filterObject(pred, xs)
    : _filterList(pred, xs)
})
