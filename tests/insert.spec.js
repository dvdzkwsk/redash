const test       = require('ava')
    , { insert } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(insert.length, 3)
})

test('is curried', (t) => {
  t.is(typeof insert(1), 'function')
  t.is(typeof insert(1, 'hello'), 'function')
})

test('inserts the element at the target index with the new value', (t) => {
  t.deepEqual(insert(4, 100, [1, 2, 3, 4, 5]), [1, 2, 3, 4, 100, 5])
})

test('does not flatten inserted arrays', (t) => {
  t.deepEqual(insert(3, [4, 5, 6], [1, 2, 3, 7, 8]), [1, 2, 3, [4, 5, 6], 7, 8])
})

test('does not mutate the original array', (t) => {
  const arr = [1, 2, 3, 4, 5]
      , res = insert(2, 100, arr)

  t.deepEqual(arr, [1, 2, 3, 4, 5])
  t.deepEqual(res, [1, 2, 100, 3, 4, 5])
})
