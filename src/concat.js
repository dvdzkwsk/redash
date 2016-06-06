import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

var concat = _curry2(function concat (as, bs) {
  return _concat.call(as, bs)
})

export default concat