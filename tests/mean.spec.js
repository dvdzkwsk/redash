const test     = require('ava')
    , { mean } = require('../dist/redash')

test('correctly calculates the mean', (t) => {
  t.is(mean([1, 2, 3, 4, 5, 6]), 3.5)
})
