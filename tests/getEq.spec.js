const test      = require('ava')
    , { getEq } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(getEq.length, 3)
})

test('is curried', (t) => {
  t.is(typeof getEq('foo'), 'function')
})

test('returns true if the property on the object equals the target value', (t) => {
  t.true(getEq('foo', 'bar', { foo: 'bar' }))
})

test('uses deep equality', (t) => {
  t.true(getEq('foo', { baz: 'biz' }, { foo: { baz: 'biz' }}))
})
