import _defn from './internal/_defn'

/**
 * @name inc
 * @signature Number -> Number
 * @category Math
 * @since v0.6.0
 * Increments a number by `1`.
 * @see dec
 *
 * @example
 * inc(10) // => 11
 * inc(-1) // => 0
 */
export default _defn('inc', function (a) {
  return a + 1
})
