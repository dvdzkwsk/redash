const test    = require('ava')
    , { zip } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(zip.length, 2)
})

test('is curried', (t) => {
  t.is(typeof zip([1, 2, 3]), 'function')
})

test('combines two arrays into a single array of tuples', (t) => {
  t.deepEqual(
      zip([1, 2, 3, 4, 5, 6, 7], ['a', 'b', 'c', 'd', 'e', 'f', 'g']),
      [ [1, 'a']
      , [2, 'b']
      , [3, 'c']
      , [4, 'd']
      , [5, 'e']
      , [6, 'f']
      , [7, 'g']])
})

test('truncates to the shorter of the two arrays', (t) => {
  t.deepEqual(
      zip([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f', 'g']),
      [ [1, 'a']
      , [2, 'b']
      , [3, 'c']])

  t.deepEqual(
      zip([1, 2, 3, 4, 5, 6], ['a', 'b', 'c']),
      [ [1, 'a']
      , [2, 'b']
      , [3, 'c']])
})

test('returns an empty array if either array is empty', (t) => {
  t.deepEqual(zip([], [1, 2, 3]), [])
  t.deepEqual(zip([1, 2, 3], []), [])
})
