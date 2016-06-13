import _curryN from './internal/_curryN'

/**
 * pipe : ((a, b, ..., f -> g), (g -> h), ..., (y -> z)) -> ((a, b, ..., f) -> z
 *
 * @since v0.1.0
 */
export default function pipe () {
  var fns = arguments

  return _curryN(fns[0].length, [], function () {
    var i   = 0
      , len = fns.length
      , y   = fns[i++].apply(null, arguments)

    for (; i < len; i++) {
      y = fns[i](y)
    }
    return y
  })
}
