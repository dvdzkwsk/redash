import _defn from './internal/_defn'
import _reduce from './internal/_reduce'

/**
 * @name reduce
 * @signature ((b, a) -> b) -> b -> [a] -> b
 * @category Collection
 * @since v0.1.0
 * @description
 * Reduces a list of values into a single value. Provided with a reducing
 * function and initial accumulator value, this is accomplished by iterating
 * through all elements of the list (from left -> right) and calling the
 * reducing function with the current acumulator value and the next value in
 * the list. The result of each function call is used as the accumulator in
 * the next call. When the end of the list is reached, the final accumulator
 * value is returned.
 * If you wish to reduce the list from right -> left, use `reduceRight`.
 * @see reduceRight
 * @see scan
 * @alias foldl
 * @example
 * const sum = reduce((acc, n) => acc + n, 0)
 * sum([1, 2, 3, 4, 5]) // => 15
 */
export default _defn('reduce', _reduce)
