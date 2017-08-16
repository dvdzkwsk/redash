import _defn from './internal/_defn'
import always from './always'

/**
 * @name F
 * @signature Any -> Boolean
 * @since v0.16.0
 * @description
 * Always returns false; equivalent to `always(false)`.
 * @see T
 *
 * @example
 * F() // => false
 */
export default _defn('F', always(false))
