import _curry2 from './internal/_curry2'

/**
 * cond : [[(a -> Boolean), (a -> *)]] -> a -> *
 */
export default _curry2(function cond (conditions, a) {
  var i   = 0
    , len = conditions.length

  for (; i < len; i++) {
    if (conditions[i][0](a)) {
      return conditions[i][1](a)
    }
  }
})
