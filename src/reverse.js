import _reverse from './internal/_reverse'

var reverse = function reverse (xs) {
  return _reverse.call(xs.slice(0))
}

export default reverse