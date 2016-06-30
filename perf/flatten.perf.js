var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./utils/benchmark')

var SAMPLE = Redash.times(() => ([1, 2]), 10000)

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.flatten(SAMPLE))
  , lodash   : benchmark(() => Lodash.flatten(SAMPLE))
  , lodashFP : benchmark(() => LodashFP.flatten(SAMPLE))
  }
}
