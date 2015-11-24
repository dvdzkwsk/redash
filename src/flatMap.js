import _curryN from './internal/_curryN'

var flatMap = _curryN(2, [], function flatMap (fn, xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
  
  for (; i < len; i++) { 
    ys = ys.concat(fn(xs[i], i))
  }
  
  return ys
})

export default flatMap