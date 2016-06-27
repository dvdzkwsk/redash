var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./benchmark')

var SAMPLE = Redash.range(0, 10000)
var XFORM = (a, b) => a > b ? a : b

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.reduce(XFORM, -Infinity, SAMPLE))
  , ramda    : benchmark(() => Ramda.reduce(XFORM, -Infinity, SAMPLE))
  , lodash   : benchmark(() => Lodash.reduce(SAMPLE, XFORM, -Infinity))
  , lodashFP : benchmark(() => LodashFP.reduce(XFORM, -Infinity, SAMPLE))
  }
}
