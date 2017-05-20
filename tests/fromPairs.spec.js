const test          = require('ava')
    , { fromPairs } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(fromPairs.length, 1)
})

test('returns an object constructed from the [key, value] tuples', (t) => {
  t.deepEqual(
    fromPairs([['foo', 'bar'], ['baz', 'biz']]), {
      foo: 'bar'
    , baz: 'biz'
    }
  )
})

test('prefers the last key/value pair when duplicate keys exist', (t) => {
  t.deepEqual(fromPairs([['foo', 'bar'], ['foo', 'baz']]), { foo: 'baz' })
})

test('returns an empty object if no pairs are provided', (t) => {
  t.deepEqual(fromPairs([]), {})
})

// NOTE: asserts that old regression does not exist, back when fromPairs was implemented
// as a `reduce` and the accumulator was mutated.
test('correctly produces independent results across different calls', (t) => {
  t.deepEqual(fromPairs([['foo', 'bar']]), { foo: 'bar' })
  t.deepEqual(fromPairs([['baz', 'biz']]), { baz: 'biz' })
})
