const test               = require('ava')
    , { chain, flatMap } = require('../dist/redash')

test('transforms each item in the collection.', (t) => {
  t.deepEqual(chain(x => x * 2, [1, 2, 3, 4]), [2, 4, 6, 8])
})

test('concatenates the results', (t) => {
  t.deepEqual(
    chain(x => ([x * 2, x * 3]), [1, 2, 3, 4]),
    [2, 3, 4, 6, 6, 9, 8, 12])
})

test('flattens results 1 level deep', (t) => {
  t.deepEqual(
    chain(x => ([x * 2, [x * 3]]), [1, 2, 3, 4]),
    [2, [3], 4, [6], 6, [9], 8, [12]])
})

test('has alias: flatMap', (t) => {
  t.is(chain, flatMap)
})
