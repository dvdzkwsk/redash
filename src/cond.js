import _defn from './internal/_defn'

/**
 * @name cond
 * @signature [[(a -> Boolean), (a -> b)]] -> a -> b | undefined
 * @category Function
 * @since v0.12.0
 * @description
 * Takes a series of conditions, expressed by tuples which contain two
 * functions, a predicate and a handler, and returns a function that applies
 * its arguments to each condition's predicate until one returns true. When
 * that happens, that condition's handler function is called with the same
 * arguments and its result is returned.
 * If no predicate is matched `undefined` is returned. It is common to use `T`
 * -- shorthand for `always(true)` -- as the last condition to act as a final
 * else clause.
 * @see when
 * @see unless
 *
 * @example
 * const fizzbuzz = cond([
 *  [x => x % 15 === 0, always('FizzBuzz')],
 *  [x => x % 3 === 0, always('Fizz')],
 *  [x => x % 5 === 0, always('Buzz')],
 *  [T, identity]
 * ])
 *
 * map(fizzbuzz, [1, 2, 3, 4, 5]) // => [1, 2, 'Fizz', 4, 'Buzz']
 */
export default _defn(function cond (conditions, a) {
  var i = 0

  for (; i < conditions.length; i++) {
    if (conditions[i][0](a)) {
      return conditions[i][1](a)
    }
  }
})
