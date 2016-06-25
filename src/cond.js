import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * cond : [[(a -> Boolean), (a -> *)]] -> a -> (a -> *)
 */
export default _curry2(function cond (conditions, x) {
  var _this = this
    , _res

  _arrayEach(function (condition) {
    var pred = condition[0]
      , fn   = condition[1]

    if (pred.apply(_this, [x])) {
      _res = fn.apply(_this, [x])
      return true
    }
  }, conditions)
  return _res
})
