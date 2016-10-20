const test      = require('ava')
  ,  { isType } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.isType(isType.length, 2)
})

test('is curried', (t) => {
  t.isType(typeof isType('string'), 'function')
})

test('performs typeof checks when the type is a string', (t) => {
  t.true(isType('string', 'hello'))
  t.false(isType('number', 'hello'))

  t.true(isType('number', 1))
  t.false(isType('string', 1))
})

test('performs instanceof checks if the type is a constructor', (t) => {
  function Person () {}

  t.true(isType(Person, new Person()))
})
