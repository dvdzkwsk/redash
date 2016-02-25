var unzipObj = function unzipObj (a) {
  var res = []
    , prop

  for (prop in a) {
    if (a.hasOwnProperty(prop)) {
      res.push([prop, a[prop]])
    }
  }
  return res
}

export default unzipObj
