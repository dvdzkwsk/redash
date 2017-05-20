const test       = require('ava')
    , { dropUntil } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(dropUntil.length, 2)
})

test('is curried', (t) => {
  t.is(typeof dropUntil(() => {}), 'function')
})

test('drops all elements of an array until the predicate is met', (t) => {
  const isEven = x => x % 2 === 0

  t.deepEqual(dropUntil(isEven, [1, 3, 4, 6, 8]), [4, 6, 8])
})

test('returns an empty array if no items match the predicate', (t) => {
  t.deepEqual(dropUntil(() => false, [1, 2, 3]), [])
})

test('returns all elements if the predicate returns true for the first element', (t) => {
  t.deepEqual(dropUntil(() => true, [1, 2, 3]), [1, 2, 3])
})

test('does not mutate the original array', (t) => {
  const isEven = x => x % 2 === 0
      , xs = [1, 3, 4, 6, 8]

  t.deepEqual(dropUntil(isEven, xs), [4, 6, 8])
  t.deepEqual(xs, [1, 3, 4, 6, 8])
})

test('returns a copy of the array even if it is identical', (t) => {
  const as = [1, 2, 3, 4]
      , bs = dropUntil(() => true, as)

  t.deepEqual(as, bs)
  t.not(as, bs)
})
