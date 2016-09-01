const test      = require('ava')
    , { assoc } = require('../dist/redash')

test('properly report its arity (is ternary)', (t) => {
  t.is(3, assoc.length)
})

test('is curried', (t) => {
  t.is('function', typeof assoc('a')('b'))
})

test('adds the property if it does not exist', (t) => {
  t.deepEqual({ foo: 'bar' }, assoc('foo', 'bar', {}))
})

test('replaces the property if it already exists', (t) => {
  t.deepEqual({ foo: 'baz'}, assoc('foo', 'baz', { foo: 'bar' }))
})

test('does not mutate the original object', (t) => {
  const obj = { foo: 'bar' }
      , res = assoc('foo', 'baz', obj)

  t.deepEqual({ foo: 'bar' }, obj)
  t.deepEqual({ foo: 'baz' }, res)
})
