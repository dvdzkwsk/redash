/**
 * always : a -> * -> a
 *
 * @since v0.9.0
 */
var always = function always (x) {
  return function () {
    return x
  }
}

export default always
