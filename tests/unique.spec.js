const test       = require('ava')
    , { unique } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(unique.length, 1)
})

test('correctly removes duplicate values for numbers', (t) => {
  t.deepEqual(unique([1, 1, 2, 2, 3, 3, 4]), [1, 2, 3, 4])
})

test('correctly removes duplicate values for strings', (t) => {
  t.deepEqual(unique(['a', 'a', 'b', 'b', 'c', 'c', 'd']), ['a', 'b', 'c', 'd'])
})

test('correctly removes duplicate values for objects', (t) => {
  t.deepEqual(
    unique([{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 2, b: 3 }]),
    [{ a: 1 }, { a: 2 }, { a: 2, b: 3 }])
})

test('correctly removes duplicate values for arrays', (t) => {
  t.deepEqual(
    unique([[], [1], [1], [], [1, 2], [1, 2, 3]]),
    [[], [1], [1, 2], [1, 2, 3]])
})
