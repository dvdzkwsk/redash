import _curryN from './internal/_curryN'

/**
 * @since v0.1.0
 */
var pipe = function pipe () {
  var fns = arguments
    , len = fns.length

  return _curryN(fns[0].length, [], function __pipe__ () {
    var i = 0
      , y = fns[i++].apply(null, arguments)

    for (; i < len; i++) {
      y = fns[i](y)
    }
    return y
  })
}
pipe.toString = function toString () {
  return 'pipe : ((a, b, ..., f -> g), (g -> h), ..., (y -> z)) -> ((a, b, ..., f) -> z)'
}

export default pipe
