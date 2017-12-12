import _Set from './internal/_Set'

/**
 * @name intersection
 * @category Collection
 * @since v0.19.0
 * @description
 * Returns the **set** of values that are present in both of the input lists.
 *
 * @example
 * intersection([1, 2, 3, 4], [3, 4, 5]) // => [3, 4]
 */
export default function intersection (xs, ys) {
  var i   = 0
    , res = []
    , set = new _Set()
    , lookupList
    , filteredList

  if (xs.length < ys.length) {
    lookupList = ys
    filteredList = xs
  } else {
    filteredList = ys
    lookupList = xs
  }
  for (; i < lookupList.length; i++) {
    set.add(lookupList[i])
  }
  for (i = 0; i < filteredList.length; i++) {
    if (!set.add(filteredList[i])) {
      res[res.length] = filteredList[i]
    }
  }
  return res
}
