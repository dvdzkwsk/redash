var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./utils/benchmark')

var SAMPLE = Redash.range(0, 10000)
var FILTER = (x) => x % 2 === 0

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.filter(FILTER, SAMPLE))
  , ramda    : benchmark(() => Ramda.filter(FILTER, SAMPLE))
  , lodash   : benchmark(() => Lodash.filter(SAMPLE, FILTER))
  , lodashFP : benchmark(() => LodashFP.filter(FILTER, SAMPLE))
  }
}
