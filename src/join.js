/**
 * @name join
 * @category Collection
 * @since v0.13.0
 * @description
 * Joins all values in a list together with the provided string.
 *
 * @example
 * join(' & ', ['Michael', 'Dwight', 'Jim']) // => 'Michael & Dwight & Jim'
 * join('', ['Hello', 'Goodbye'])            // => 'HelloGoodbye'
 */
export default function join (joiner, xs) {
  return xs.join(joiner)
}
