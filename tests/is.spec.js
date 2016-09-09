const test  = require('ava')
  ,  { is } = require('../dist/stdlib')

test('properly reports its arity (is binary)', (t) => {
  t.is(is.length, 2)
})

test('is curried', (t) => {
  t.is(typeof is('string'), 'function')
})

test('performs typeof checks when the type is a string', (t) => {
  t.true(is('string', 'hello'))
  t.false(is('number', 'hello'))

  t.true(is('number', 1))
  t.false(is('string', 1))
})

test('performs instanceof checks if the type is a constructor', (t) => {
  function Person () {}

  t.true(is(Person, new Person()))
})
