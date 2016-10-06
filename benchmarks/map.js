const f         = require('../fp-standard')
    , R         = require('ramda')
    , lodash    = require('lodash')
    , lodashfp  = require('lodash/fp')
    , Benchmark = require('benchmark')
    , suite     = new Benchmark.Suite()
    , fixture   = f.range(0, 1000)
    , fn        = (a) => a + a

suite
  .add('fp-standard', function () {
    f.map(fn, fixture)
  })
  .add('ramda', function () {
    R.map(fn, fixture)
  })
  .add('lodash', function () {
    lodash.map(fixture, fn)
  })
  .add('lodash/fp', function () {
    lodashfp.map(fn, fixture)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run()
