import always from './always'

/**
 * @name T
 * @category Function
 * @since v0.16.0
 * @description
 * Always returns true; equivalent to `always(true)`.
 * Commonly used as the last predicate in a condition (`cond`) to handle
 * unmatched cases. Use `F` for a false stub.
 * @see F
 *
 * @example
 * times(T, 5) // => [true, true, true, true, true]
 */
export default always(true)
