var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./benchmark')

var SAMPLE = Redash.range(0, 10000)

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.sum(SAMPLE))
  , ramda    : benchmark(() => Ramda.sum(SAMPLE))
  , lodash   : benchmark(() => Lodash.sum(SAMPLE))
  , lodashFP : benchmark(() => LodashFP.sum(SAMPLE))
  }
}
