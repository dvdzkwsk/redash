import curryN from './curryN'

/**
 * compose : (y -> z), ..., (g -> h), (a, b, ..., f -> g) -> (a, b, ..., f -> z)
 *
 * @since v0.1.0
 */
var compose = function compose () {
  var fns = arguments
    , i   = fns.length - 1
    , fn  = fns[i--]

  return curryN(fn.length, function __composition__ () {
    var y = fn.apply(null, arguments)

    for (; i >= 0; i--) {
      y = fns[i](y)
    }
    return y
  })
}

export default compose
