import _arrayEach from './_arrayEach'

export default function _reduce (fn, b, as) {
  _arrayEach(function (a) {
    b = fn(b, a)
  }, as)
  return b
}
