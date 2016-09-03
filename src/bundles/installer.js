import * as stdlib from './index'

export default function jsStandardLibInstaller (ctx) {
  var keys = Object.keys(stdlib)
    , len  = keys.length
    , i    = 0
    , key

  while (i < len) {
    key = keys[i]
    ctx[key] = stdlib[key]
    i += 1
  }
}
