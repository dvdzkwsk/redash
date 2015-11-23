import _slice  from './internal/_slice'
import _curryN from './internal/_curryN' 

var compose = function compose () {
  var fns   = _slice.call(arguments)
    , maxIdx = fns.length - 1

  return _curryN(fns[maxIdx].length, [], function __composition__ () {
    var i = maxIdx
      , y = fns[i--].apply(null, _slice.call(arguments))

    for (; i >= 0; i--) {
      y = fns[i](y)
    }
    return y
  })
}

export default compose