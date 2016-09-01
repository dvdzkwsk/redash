const test       = require('ava')
    , { concat } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(2, concat.length)
})

test('be curried', (t) => {
  t.is('function', typeof concat([1, 2, 3]))
})

test('concatenates the second list onto the first', (t) => {
  t.deepEqual([1, 2, 3, 4, 5, 6], concat([1, 2, 3], [4, 5, 6]))
})

test('works if the first list is empty', (t) => {
  t.deepEqual([1, 2, 3], concat([], [1, 2, 3]))
})

test('works if the second list is empty', (t) => {
  t.deepEqual([1, 2, 3], concat([1, 2, 3], []))
})

test('works if both lists are empty', (t) => {
  t.deepEqual([], concat([], []))
})

test('always returns a new list', (t) => {
  const as = [1, 2, 3]
      , bs = []
      , res = concat(as, bs)

  t.not(res, as)       // compare references
  t.deepEqual(res, as) // compare values
})
