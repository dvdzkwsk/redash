const test         = require('ava')
    , { identity } = require('../dist/redash')

test('returns the value it is given', (t) => {
  const obj = {}

  t.is(identity(5), 5)
  t.is(identity(obj), obj)
})
