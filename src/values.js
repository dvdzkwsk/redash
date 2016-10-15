/**
 * @signature {k:v} -> [v]
 * @since v0.14.0
 */
export default function values (obj) {
  var keys   = Object.keys(obj)
    , i      = 0
    , len    = keys.length
    , values = new Array(keys.length)

  for (; i < len; i++) values[i] = obj[keys[i]]
  return values
}
