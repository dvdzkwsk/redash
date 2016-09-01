const test       = require('ava')
    , { append } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(2, append.length)
})

test('is curried', (t) => {
  t.is('function', typeof append(1))
})

test('concatenates the first argument onto the end of the list', (t) => {
  t.deepEqual([1, 2, 3, 4, 5], append(5, [1, 2, 3, 4]))
})

test('work if the list is an empty array', (t) => {
  t.deepEqual([5], append(5, []))
})

test('not mutate the list', (t) => {
  const arr = [1, 2, 3, 4]
      , res = append(5, arr)

  t.deepEqual([1, 2, 3, 4], arr)
  t.deepEqual([1, 2, 3, 4, 5], res)
})
