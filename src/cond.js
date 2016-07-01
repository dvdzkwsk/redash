import _curry2 from './internal/_curry2'

/**
 * cond : [[(a -> Boolean), (a -> *)]] -> a -> *
 */
export default _curry2(function cond (conditions, a) {
  var i   = 0
    , len = conditions.length
    , cond

  for (; i < len; i++) {
    cond = conditions[i]
    if (cond[0](a)) {
      return cond[1](a)
    }
  }
})
