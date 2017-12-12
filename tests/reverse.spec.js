const test        = require('ava')
    , { reverse } = require('../dist/redash')

test('reverses the provided list', (t) => {
  t.deepEqual(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
})

test('handles empty arrays', (t) => {
  t.deepEqual(reverse([]), [])
})

test('does not mutate the original array', (t) => {
  const arr = [1, 2, 3, 4, 5]
      , res = reverse(arr)

  t.deepEqual(arr, [1, 2, 3, 4, 5])
  t.deepEqual(res, [5, 4, 3, 2, 1])
})

test('supports strings', (t) => {
  t.is(reverse('hello'), 'olleh')
})
