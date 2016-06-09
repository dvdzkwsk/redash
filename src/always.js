/**
 * @since v0.9.0
 */
var always = function always (x) {
  return function __redash_always__ () {
    return x
  }
}

export default always
