var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./benchmark')

var SAMPLE = Redash.range(0, 10000)
var FILTER = () => false

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.find(FILTER, SAMPLE))
  , ramda    : benchmark(() => Ramda.find(FILTER, SAMPLE))
  , lodash   : benchmark(() => Lodash.find(SAMPLE, FILTER))
  , lodashFP : benchmark(() => LodashFP.find(FILTER, SAMPLE))
  }
}
