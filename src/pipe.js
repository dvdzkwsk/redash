import curryN from './curryN'

/**
 * @name pipe
 * @signature ((a, b, ..., f -> g), (g -> h), ..., (y -> z)) -> ((a, b, ..., f) -> z
 * @since v0.1.0
 */
export default function pipe () {
  var fns = arguments

  return curryN(fns[0].length, function () {
    var i   = 0
      , len = fns.length
      , acc = fns[i++].apply(null, arguments)

    for (; i < len; i++) {
      acc = fns[i](acc)
    }
    return acc
  })
}
