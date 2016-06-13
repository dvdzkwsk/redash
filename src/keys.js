/**
 * @since v0.1.0
 */
var keys = function (object) {
  return Object.keys(object)
}
keys.toString = function toString () {
  return 'keys : {k:v} -> [k]'
}

export default keys
