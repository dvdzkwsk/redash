import _equals from './_equals'

export default function contains (x, xs) {
  var i

  if (typeof xs === 'string') {
    return xs.indexOf(x) !== -1
  }

  i = xs.length - 1
  while (i >= 0) {
    if (_equals(x, xs[i])) {
      return true
    }
    i--
  }
  return false
}
