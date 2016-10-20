import _curry2 from './internal/_curry2'

/**
 * @name join
 * @signature String -> [String] -> String
 * @since v0.13.0
 * @description
 * Joins all elements of an array with a given string.
 *
 * @example
 * join(' & ', ['Michael', 'Dwight', 'Jim']) // => 'Michael & Dwight & Jim'
 * join('', ['Hello', 'Goodbye'])            // => 'HelloGoodbye'
 */
export default _curry2(function join (joiner, xs) {
  return xs.join(joiner)
})
