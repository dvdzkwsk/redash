import _curry2 from './internal/_curry2'

var flatMap = _curry2(function flatMap (fn, xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
  
  for (; i < len; i++) { 
    ys = ys.concat(fn(xs[i], i))
  }
  
  return ys
})

export default flatMap