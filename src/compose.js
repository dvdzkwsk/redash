import curryN from './curryN'

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
