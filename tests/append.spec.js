const test       = require('ava')
    , { append } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(append.length, 2)
})

test('is curried', (t) => {
  t.is(typeof append(1), 'function')
})

test('appends the first argument onto the end of the list', (t) => {
  t.deepEqual(append(5, [1, 2, 3, 4]), [1, 2, 3, 4, 5])
})

test('works if the list is an empty array', (t) => {
  t.deepEqual(append(5, []), [5])
})

test('does not concatenate lists', (t) => {
  t.deepEqual(append([4, 5], [1, 2, 3]), [1, 2, 3, [4, 5]])
})

test('does not mutate the original list', (t) => {
  const arr = [1, 2, 3, 4]
      , res = append(5, arr)

  t.deepEqual([1, 2, 3, 4], arr)
  t.deepEqual(res, [1, 2, 3, 4, 5])
})

test('works for strings', (t) => {
  t.is(append('d', 'abc'), 'abcd')
})
