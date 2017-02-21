import _defn from './internal/_defn'

/**
 * @name dec
 * @signature Number -> Number
 * @since v0.6.0
 * @description
 * Decrements a number by `1`.
 * @see inc
 *
 * @example
 * dec(10) // => 9
 * dec(-1) // => -2
 */
export default _defn('dec', function (a) {
  return a - 1
})
