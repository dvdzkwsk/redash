const test        = require('ava')
    , { toLower } = require('../dist/stdlib')

test('lowercases a single character', (t) => {
  t.is(toLower('A'), 'a')
})

test('lowercases a string of multiple characters', (t) => {
  t.is(toLower('A LONG STRING'), 'a long string')
})
