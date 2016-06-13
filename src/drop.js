import _curry2 from './internal/_curry2'
import _slice from './internal/_slice'

var drop = _curry2(function drop (n, xs) {
  return _slice.call(xs, n)
}, 'drop : Number -> Array -> Array')

export default drop
