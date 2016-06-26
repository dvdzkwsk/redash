import _arrayEachShortCircuitable from './internal/_arrayEachShortCircuitable'
import _curry2 from './internal/_curry2'

/**
 * cond : [[(a -> Boolean), (a -> *)]] -> a -> (a -> *)
 */
export default _curry2(function cond (conditions, x) {
  var _this = this
    , _res

  _arrayEachShortCircuitable(function (condition) {
    var pred = condition[0]
      , fn   = condition[1]

    if (pred.call(_this, x)) {
      _res = fn.call(_this, x)
      return true
    }
  }, conditions)
  return _res
})
