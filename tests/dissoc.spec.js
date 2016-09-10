const test       = require('ava')
    , { dissoc } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(dissoc.length, 2)
})

test('is curried', (t) => {
  t.is(typeof dissoc('a'), 'function')
})

test('removes the target key from the object', (t) => {
  t.deepEqual(dissoc('foo', { foo: true,  baz: true }), {
    baz: true
  })
})

test('noops if the key does not exist', (t) => {
  t.deepEqual(dissoc('foo', {}), {})
})

test('does not mutate the original object', (t) => {
  const obj = { foo: true }
      , res = dissoc('foo', obj)

  t.deepEqual(obj, { foo: true })
  t.deepEqual(res, {})
})

test('produces a new object even if the operation is noop', (t) => {
  const obj = {}
      , res = dissoc('foo', obj)

  t.deepEqual(obj, {})
  t.deepEqual(res, obj) // compare values
  t.not(res, obj)       // compare references
})
