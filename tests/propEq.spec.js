const test              = require('ava')
    , { getEq, propEq } = require('../dist/redash')

test('is an alias of `getEq`', (t) => {
  t.is(propEq, getEq)
})
