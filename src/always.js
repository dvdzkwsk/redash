/**
 * @since v0.9.0
 */
var always = function always (x) {
  return function __redash_always__ () {
    return x
  }
}
always.toString = function toString () {
  return 'always : a -> * -> a'
}

export default always
