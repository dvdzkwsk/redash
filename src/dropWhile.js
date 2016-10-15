import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

/**
 * @name dropWhile
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.14.0
 */
export default _curry2(function dropWhile (fn, xs) {
  var i   = 0
    , len = xs.length

  while (i < len && fn(xs[i])) i += 1
  return _slice.call(xs, i)
})
