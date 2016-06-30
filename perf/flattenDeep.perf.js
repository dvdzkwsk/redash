var Ramda     = require('ramda')
  , Redash    = require('../dist/redash.min')
  , Lodash    = require('lodash')
  , LodashFP  = require('lodash/fp')
  , benchmark = require('./utils/benchmark')

var SAMPLE = Redash.times(() => ([1, 2, [3, [4], [5, 6]]]), 10000)

module.exports = function () {
  return {
    redash   : benchmark(() => Redash.flattenDeep(SAMPLE))
  , ramda    : benchmark(() => Ramda.flatten(SAMPLE))
  , lodash   : benchmark(() => Lodash.flattenDeep(SAMPLE))
  , lodashFP : benchmark(() => LodashFP.flattenDeep(SAMPLE))
  }
}
