import _equals from './_equals'

export default function contains (a, as) {
  var i

  if (typeof as === 'string') {
    return as.indexOf(a) !== -1
  }

  i = as.length - 1
  while (i >= 0) {
    if (_equals(a, as[i--])) return true
  }
  return false
}
