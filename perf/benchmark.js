module.exports = function benchmark (fn) {
  var start = Date.now()
    , i = 0

  for (; i < 10000; i++) {
    fn()
  }
  return Date.now() - start
}
