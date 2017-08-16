import _defn from './internal/_defn'
import _reduce from './internal/_reduce'
import _reverse from './internal/_reverse'

/**
 * @name reduceRight
 * @signature ((b, a) -> b) -> b -> [a]
 * @namespace Collection
 * @since v0.1.0
 * @description
 * The same as `reduce`, but runs the reducing function from right -> left.
 *
 * Reduces a list of values into a single value. Provided with a reducing
 * function and initial accumulator value, this is accomplished by iterating
 * through all elements of the list (from right -> left) and calling the
 * reducing function with the current acumulator value and the next value in
 * the list. The result of each function call is used as the accumulator in
 * the next call. When the head of the list is reached, the final accumulator
 * value is returned.
 * If you wish to reduce the list from left -> right, use `reduce`.
 * @see reduce
 * @alias foldr
 * @example
 * const reverse = reduce((acc, x) => [x].concat(acc), [])
 * reverse([1, 2, 3, 4]) // => [4, 3, 2, 1]
 */
export default _defn('reduceRight', function (fn, y, xs) {
  return _reduce(fn, y, _reverse.call(xs))
})
