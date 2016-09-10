const test        = require('ava')
    , { toUpper } = require('../dist/fp-standard')

test('uppercases a single character', (t) => {
  t.is(toUpper('a'), 'A')
})

test('uppercases a string of multiple characters', (t) => {
  t.is(toUpper('a long string'), 'A LONG STRING')
})
