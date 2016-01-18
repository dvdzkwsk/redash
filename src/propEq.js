import _curry3 from './internal/_curry3'

var propEq =  _curry3(function propEq (p, y, x) {
  return x[p] === y
})

export default propEq