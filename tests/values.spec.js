const test       = require('ava')
    , { values } = require('../dist/redash')

test('returns an array of values for all own properties', (t) => {
  t.deepEqual(values({ a: 1, b: 2, c: 3 }), [1, 2, 3])
})

test('ignores inherited properties', (t) => {
  function A () {}
  A.prototype.bar = 'bar'

  const a = new A()
  a.baz = 'baz'

  t.deepEqual(values(a), ['baz'])
})

test('returns an empty array if there are no own properties', (t) => {
  t.deepEqual(values({}), [])
})
