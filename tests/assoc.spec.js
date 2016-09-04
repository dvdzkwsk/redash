const test      = require('ava')
    , { assoc } = require('../dist/stdlib')

test('properly report its arity (is ternary)', (t) => {
  t.is(assoc.length, 3)
})

test('is curried', (t) => {
  t.is(typeof assoc('a')('b'), 'function')
})

test('adds the property if it does not exist', (t) => {
  t.deepEqual(assoc('foo', 'bar', {}), { foo: 'bar' })
})

test('replaces the property if it already exists', (t) => {
  t.deepEqual(assoc('foo', 'baz', { foo: 'bar' }), { foo: 'baz'})
})

test('does not mutate the original object', (t) => {
  const obj = { foo: 'bar' }
      , res = assoc('foo', 'baz', obj)

  t.deepEqual(obj, { foo: 'bar' })
  t.deepEqual(res, { foo: 'baz' })
})
