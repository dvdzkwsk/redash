const f         = require('../fp-standard')
    , R         = require('ramda')
    , lodash    = require('lodash')
    , lodashfp  = require('lodash/fp')
    , Benchmark = require('benchmark')
    , suite     = new Benchmark.Suite()
    , fixture   = f.range(0, 1000)
    , fn        = (a, b) => a + b

suite
  .add('fp-standard', function () {
    f.reduce(fn, 0, fixture)
  })
  .add('ramda', function () {
    R.reduce(fn, 0, fixture)
  })
  .add('lodash', function () {
    lodash.reduce(fixture, fn, 0)
  })
  .add('lodash/fp', function () {
    lodashfp.reduce(fn, 0, fixture)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run()
