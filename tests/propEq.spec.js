const test              = require('ava')
    , { getEq, propEq } = require('../dist/halcyon')

test('is an alias of `getEq`', (t) => {
  t.is(propEq, getEq)
})
