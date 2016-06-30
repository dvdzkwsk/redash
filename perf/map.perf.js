var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./utils/benchmark')

var SAMPLE = Redash.range(0, 10000)
var XFORM = (x) => x * 2

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.map(XFORM, SAMPLE))
  , ramda    : benchmark(() => Ramda.map(XFORM, SAMPLE))
  , lodash   : benchmark(() => Lodash.map(SAMPLE, XFORM))
  , lodashFP : benchmark(() => LodashFP.map(XFORM, SAMPLE))
  }
}
