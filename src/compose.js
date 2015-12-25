import _curryN from './internal/_curryN' 

var compose = function compose () {
  var fns   = arguments
    , maxIdx = fns.length - 1

  return _curryN(fns[maxIdx].length, [], function __composition__ () {
    var i = maxIdx
      , y = fns[i--].apply(null, arguments)

    for (; i >= 0; i--) {
      y = fns[i](y)
    }
    return y
  })
}

export default compose
