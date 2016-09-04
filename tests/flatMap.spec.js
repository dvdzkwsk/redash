const test        = require('ava')
    , { flatMap } = require('../dist/stdlib')

test('properly reports its arity (is binary)', (t) => {
  t.is(flatMap.length, 2)
})

test('is curried', (t) => {
  t.is(typeof flatMap(() => {}), 'function')
})

test('transforms each item in the collection.', (t) => {
  t.deepEqual(flatMap(x => x * 2, [1, 2, 3, 4]), [2, 4, 6, 8])
})

test('concatenates the results', (t) => {
  t.deepEqual(
    flatMap(x => ([x * 2, x * 3]), [1, 2, 3, 4]),
    [2, 3, 4, 6, 6, 9, 8, 12])
})

test('flattens results 1 level deep', (t) => {
  t.deepEqual(
    flatMap(x => ([x * 2, [x * 3]]), [1, 2, 3, 4]),
    [2, [3], 4, [6], 6, [9], 8, [12]])
})
