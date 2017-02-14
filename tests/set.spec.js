const test         = require('ava')
    , { lensProp
    , set        } = require('../dist/halcyon')

test('property reports its arity (is ternary)', (t) => {
  t.is(set.length, 3)
})

test('is curried', (t) => {
  t.is(typeof set(lensProp('foo'), 'hello'), 'function')
})

test('returns the result of the setter and value applied to the target object', (t) => {
  t.deepEqual(set(lensProp('foo'), 'BAZ', { foo: 'bar' }), { foo: 'BAZ' })
})
