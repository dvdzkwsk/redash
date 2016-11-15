import * as redash from './index'

export default function redashInstaller (ctx) {
  var keys = Object.keys(redash)
    , len  = keys.length
    , i    = 0
    , key

  while (i < len) {
    key = keys[i]
    ctx[key] = redash[key]
    i += 1
  }
}
