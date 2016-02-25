import _curry2 from './internal/_curry2'

var zipObj = _curry2(function zipObj (as, bs) {
  var i   = 0
    , len = as.length < bs.length ? as.length: bs.length
    , res = {}

  for (; i < len; i++) {
    res[as[i]] = bs[i]
  }
  return res
})

export default zipObj
