const test     = require('ava')
    , { trim } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(trim.length, 1)
})

test('trims leading whitespace', (t) => {
  t.is(trim('    hello'), 'hello')
})

test('trims trailing whitespace', (t) => {
  t.is(trim('hello     '), 'hello')
})

test('noops if there is no leading or trailing whitespace', (t) => {
  t.is(trim('hello'), 'hello')
})
