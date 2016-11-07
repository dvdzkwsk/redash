import _curry2 from './internal/_curry2'

/**
 * @name findLast
 * @signature (a -> Boolean) -> [a] -> a | undefined
 * @since v0.12.0
 * @description
 * Finds and returns the last value in a list that matches the given predicate. If no
 * matching value is found, `undefined` is returned.
 *
 * @example
 * const users = [{ id: 1, name: 'Bob' }, { id: 2, name: 'Bill'}, { id: 3, name: 'Bob' }]
 * findLast(propEq('name', 'Bob'), users) // => { id: 3, name: 'Bob' }
 */
export default _curry2(function findLast (pred, xs) {
  var i = xs.length - 1

  while (i >= 0) {
    if (pred(xs[i])) {
      return xs[i]
    }
    i--
  }
})
