import _slice  from './internal/_slice'
import _curryN from './internal/_curryN'

var pipe = function pipe () {
  var fns = _slice.call(arguments)
    , len = fns.length

  return _curryN(fns[0].length, [], function __pipe__ () {
    var i = 0
      , y = fns[i++].apply(null, _slice.call(arguments))

    for (; i < len; i++) {
      y = fns[i](y)
    }
    return y
  })
}

export default pipe