const test     = require('ava')
    , { take } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(take.length, 2)
})

test('is curried', (t) => {
  t.is(typeof take(5), 'function')
})

test('returns an array containing `n` items from the provided array', (t) => {
  t.deepEqual(take(2, [1, 2, 3, 4]), [1, 2])
})

test('only takes as many items as actually exist.', (t) => {
  t.deepEqual(take(15, [1, 2, 3, 4]), [1, 2, 3, 4])
})

test('produces a new object reference even if the result is identitical.', (t) => {
  const arr = [1, 2, 3, 4, 5]
      , res = take(5, arr)

  t.deepEqual(res, [1, 2, 3, 4, 5])
  t.not(res, arr)       // compare references
  t.deepEqual(res, arr) // compare values
})
