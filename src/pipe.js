import _curryN from './internal/_curryN'

/**
 * @name pipe
 * @category Function
 * @since v0.1.0
 * @description
 * Takes a list of functions and creates a single, curried function
 * that, when called, invokes the original functions from left to right,
 * passing the result of each function call as the argument to the next. The
 * result of the rightmost function call is the final return value.
 * This is the same concept as `compose`, but runs the functions from
 * left -> right. Note that all functions except for the first (leftmost) must
 * be unary (accept only a single argument), because functions can only return
 * a single value.
 * @see compose
 *
 * @example
 * const getFriends = pipe([
 *  prop('friends'),
 *  map(pipe([prop('name'), toUpper])),
 *  join(', ')
 * ])
 *
 * const user = { friends: [{ name: 'Jim' }, { name: 'Dwight' }] }
 * getFriends(user) // => 'JIM, DWIGHT'
 */
export default function pipe (fns) {
  return _curryN(fns[0].length, [], function () {
    var i   = 0
      , len = fns.length
      , acc = fns[i++].apply(null, arguments)

    for (; i < len; i++) {
      acc = fns[i](acc)
    }
    return acc
  })
}
