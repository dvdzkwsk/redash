import _defn from './internal/_defn'

/**
 * @name join
 * @signature String -> [String] -> String
 * @category Collection
 * @since v0.13.0
 * @description
 * Joins all elements of a list together with the provided string.
 *
 * @example
 * join(' & ', ['Michael', 'Dwight', 'Jim']) // => 'Michael & Dwight & Jim'
 * join('', ['Hello', 'Goodbye'])            // => 'HelloGoodbye'
 */
export default _defn('join', function (joiner, xs) {
  return xs.join(joiner)
})
