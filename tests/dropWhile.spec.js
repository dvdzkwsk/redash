const test       = require('ava')
    , { dropWhile } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(dropWhile.length, 2)
})

test('is curried', (t) => {
  t.is(typeof dropWhile(() => {}), 'function')
})

test('drops all elements of an array until the predicate returns false', (t) => {
  const isEven = x => x % 2 === 0

  t.deepEqual(dropWhile(isEven, [2, 4, 1, 2, 3]), [1, 2, 3])
})

test('returns an empty array if all items match the predicate', (t) => {
  t.deepEqual(dropWhile(() => true, [1, 2, 3]), [])
})

test('returns all elements if the predicate returns false for the first element', (t) => {
  t.deepEqual(dropWhile(() => false, [1, 2, 3]), [1, 2, 3])
})

test('does not mutate the original array', (t) => {
  const isEven = x => x % 2 === 0
      , xs = [2, 4, 1, 2, 3]

  t.deepEqual(dropWhile(isEven, xs), [1, 2, 3])
  t.deepEqual(xs, [2, 4, 1, 2, 3])
})

test('returns a copy of the array even if it is identical', (t) => {
  const as = [1, 2, 3, 4]
      , bs = dropWhile(() => false, as)

  t.deepEqual(as, [1, 2, 3, 4])
  t.deepEqual(bs, [1, 2, 3, 4])
  t.not(as, bs)
})
