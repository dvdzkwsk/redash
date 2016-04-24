import _curryN from './internal/_curryN'

var compose = function compose () {
  var fns = arguments
    , _i  = fns.length - 1
    , fn  = fns[_i--]

  return _curryN(fn.length, [], function __composition__ () {
    var i = _i
      , y = fn.apply(null, arguments)

    for (; i >= 0; i--) {
      y = fns[i](y)
    }
    return y
  })
}

export default compose
