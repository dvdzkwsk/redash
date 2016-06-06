var tap = function (fn) {
  return function tapped (a) {
    fn(a)
    return a
  }
}

export default tap
