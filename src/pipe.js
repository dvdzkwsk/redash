import _defn from './internal/_defn'
import _curryN from './internal/_curryN'
import _nameFunc from './internal/_nameFunc'
import isType from './isType'
import type from './type'

/**
 * @name pipe
 * @signature [(a -> b), (b -> c), ... (y -> z)] -> a -> z
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
export default _defn('pipe', function (fns) {
  var fni = 0
    , wrappedFn

  // TODO(zuko): abstract for use in other functions and disable in production.
  for (; fni < fns.length; fni++) {
    if (!isType('function', fns[fni])) {
      throw new TypeError(
        'Invalid argument supplied to `pipe`. The value at index ' +
        '[' + fni + '] was not a function; what was received was of type: ' +
        type(fns[fni]) + '.'
      )
    }
  }
  wrappedFn = _curryN(fns[0].length, [], function () {
    var i   = 0
      , len = fns.length
      , acc = fns[i++].apply(null, arguments)

    for (; i < len; i++) {
      acc = fns[i](acc)
    }
    return acc
  })
  _nameFunc('pipe', [fns], wrappedFn)
  return wrappedFn
})
