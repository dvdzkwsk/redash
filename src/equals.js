import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

var equals = _curry2(function equals (a, b) {
  return _equals(a, b)
})

export default equals
