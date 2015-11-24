var flatten = function flatten (xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x
  
  for (; i < len; i++) {
    x  = Array.isArray(xs[i]) ? flatten(xs[i]) : xs[i] 
    ys = ys.concat(x)
  }
  
  return ys
}

export default flatten