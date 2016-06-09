var toPairs = function toPairs (a) {
  var ys = []
    , p

  for (p in a) {
    if (a.hasOwnProperty(p)) {
      ys.push([p, a[p]])
    }
  }
  return ys
}

export default toPairs
