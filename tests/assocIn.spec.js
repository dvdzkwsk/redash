const test      = require('ava')
  , { assocIn } = require('../dist/redash')

test('properly report its arity (is ternary)', (t) => {
  t.is(assocIn.length, 3)
})

test('is curried', (t) => {
  t.is(typeof assocIn('a')('b'), 'function')
})

test('adds properties that do not exist', (t) => {
  t.deepEqual(assocIn(['a', 'b'], 'bar', {}), { a: { b: 'bar' } })
})

test('replaces the property if it already exists', (t) => {
  t.deepEqual(assocIn(['a', 'b'], 'bar', { a: { b: 'buzz' }}), { a: { b: 'bar' } })
})

test('does not mutate the original object', (t) => {
  const orig = { a: { b: 'buzz' } }
      , res  = assocIn(['a', 'b'], 'bar', orig)

  t.deepEqual(orig, { a: { b: 'buzz' } })
  t.deepEqual(res, { a: { b: 'bar' } })
})

test('does not convert arrays to objects', (t) => {
  t.deepEqual(
    assocIn(['a', 2], 'BOP', { a: ['foo', 'bar', 'baz']}),
    { a: ['foo', 'bar', 'BOP'] }
  )
})
