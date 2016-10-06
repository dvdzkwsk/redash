const f         = require('../fp-standard')
    , R         = require('ramda')
    , lodash    = require('lodash')
    , lodashfp  = require('lodash/fp')
    , Benchmark = require('benchmark')
    , suite     = new Benchmark.Suite()
    , fixture   = f.range(0, 1000)
    , fn        = (a) => a % 2

suite
  .add('fp-standard', function () {
    f.filter(fn, fixture)
  })
  .add('ramda', function () {
    R.filter(fn, fixture)
  })
  .add('lodash', function () {
    lodash.filter(fixture, fn)
  })
  .add('lodash/fp', function () {
    lodashfp.filter(fn, fixture)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run()
