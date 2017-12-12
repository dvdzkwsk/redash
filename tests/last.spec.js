const test     = require('ava')
    , { last } = require('../dist/redash')

test('returns the last item in an array', (t) => {
  t.is(last([1, 2, 3]), 3)
  t.is(last([1]), 1)
})

test('returns undefined for an empty array', (t) => {
  t.is(last([]), undefined)
})
