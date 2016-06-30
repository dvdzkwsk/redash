var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./utils/benchmark')

var SAMPLE = Redash.range(0, 10000)
var FILTER = () => false

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.findLast(FILTER, SAMPLE))
  , ramda    : benchmark(() => Ramda.findLast(FILTER, SAMPLE))
  , lodash   : benchmark(() => Lodash.findLast(SAMPLE, FILTER))
  , lodashFP : benchmark(() => LodashFP.findLast(FILTER, SAMPLE))
  }
}
