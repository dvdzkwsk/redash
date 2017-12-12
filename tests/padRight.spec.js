const test         = require('ava')
    , { padRight } = require('../dist/redash')

test('pads the string to the target length', (t) => {
  t.is(padRight(5, 'X', 'hi'), 'hiXXX')
})

test('noops if the string is already at the target length', (t) => {
  t.is(padRight(5, 'X', 'hello'), 'hello')
})

test('noops if the string is already above the target length', (t) => {
  t.is(padRight(3, 'X', 'hello'), 'hello')
})
