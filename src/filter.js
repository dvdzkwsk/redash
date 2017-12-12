import _filterList from './internal/_filterList'
import _filterObject from './internal/_filterObject'
import isType from './isType'

/**
 * @name filter
 * @category Collection
 * @since v0.1.0
 * @description
 * Returns a list of the values for which the predicate returned true.
 * @see reject
 *
 * @example
 * filter(isEven, [1, 2, 3, 4, 5]) // => [2, 4]
 */
export default function filter (pred, xs) {
  return isType('Object', xs)
    ? _filterObject(pred, xs)
    : _filterList(pred, xs)
}
