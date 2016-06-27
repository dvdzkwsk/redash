var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , benchmark = require('./benchmark')

var SAMPLE = Redash.range(0, 10000)
var XFORM = (a, b) => a > b ? a : b

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.scan(XFORM, 0, SAMPLE))
  , ramda    : benchmark(() => Ramda.scan(XFORM, 0, SAMPLE))
  }
}
