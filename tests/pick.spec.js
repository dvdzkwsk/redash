const test     = require('ava')
    , { pick } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(pick.length, 2)
})

test('is curried', (t) => {
  t.is(typeof pick(['name']), 'function')
})

test('returns a new object with the requested properties from the target object', (t) => {
  t.deepEqual(pick(['a', 'b'], { a: 1, b: 2, c: 3 }), { a: 1, b: 2 })
})
