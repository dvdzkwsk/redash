import curryN from './curryN'
import _slice from './internal/_slice'
import _reverse from './internal/_reverse'

/**
 * @since v0.10.0
 */
var flip = function (fn) {
  return curryN(fn.length, function flipped () {
    return fn.apply(this, _reverse.call(arguments))
  })
}

export default flip
