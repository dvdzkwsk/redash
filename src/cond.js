import _curry2 from './internal/_curry2'

/**
 * @name cond
 * @signature [[(a -> Boolean), (a -> *)]] -> a -> *
 * @since v0.12.0
 * @description
 * Encapsulates the logic surrounding multiple if/else branches by allowing
 * you to provide an array of tuples containing two elements, a predicate and
 * a transform function.
 * The resulting function will apply the arguments it receives to each
 * predicate in turn until one is matched, at which point its paired transform
 * function will be called with the same arguments and its result returned.
 * If no predicate is matched `undefined` is returned. As a catch all, it
 * is common to use `always(true)` as the last condition.
 *
 * @example
 * const fizzbuzz = cond([
 *  [x => x % 15 === 0, always('FizzBuzz')],
 *  [x => x % 3 === 0, always('Fizz')],
 *  [x => x % 5 === 0, always('Fizz')],
 *  [always(true), identity]
 * ])
 *
 * map(fizzbuzz, [1, 2, 3, 4, 5]) // => [1, 2, 'Fizz', 4, 'Buzz']
 */
export default _curry2(function cond (conditions, a) {
  var i   = 0
    , len = conditions.length

  for (; i < len; i++) {
    if (conditions[i][0](a)) {
      return conditions[i][1](a)
    }
  }
})
