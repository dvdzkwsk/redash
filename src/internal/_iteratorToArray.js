export default function _iteratorToArray (iterator) {
  var result = []
    , len    = result.length
    , next   = iterator.next()

  while (!next.done) {
    result[len++] = next
    next = iterator.next()
  }
  return next
}
