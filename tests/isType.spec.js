/* eslint-disable no-new-wrappers */
const test            = require('ava')
  ,  { isType, type } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(isType.length, 2)
})

test('is curried', (t) => {
  t.is(typeof isType('String'), 'function')
})

test('correctly checks string types', (t) => {
  t.true(isType('String', 'hello'))
  t.true(isType('String', new String('hello')))
  t.true(isType(String, 'hello'))
  t.true(isType(String, new String('hello')))
})

test('correctly checks number types', (t) => {
  t.true(isType('Number', 123))
  t.true(isType('Number', new Number(123)))
  t.true(isType(Number, 123))
  t.true(isType(Number, new Number(123)))
})

test('correctly checks object types', (t) => {
  t.true(isType('Object', {}))
})

test('correctly checks array types', (t) => {
  t.true(isType('Array', []))
})

test('correctly checks functions', (t) => {
  t.true(isType('Function', () => {}))
})

test('treats `undefined` values as `Nil`', (t) => {
  t.true(isType('Nil', undefined))
})

test('treats `null` values as `Nil`', (t) => {
  t.true(isType('Nil', null))
})

test('uses internal `type` function when `type` is a string', (t) => {
  t.true(isType('Promise', Promise.resolve())) // eslint-disable-line
})

test('correctly compares userland classes', (t) => {
  function Person () {}

  t.true(isType(Person, new Person()))
  t.false(isType(Person, {}))
})

test('normalizes string type capitalization', (t) => {
  t.true(isType('ObJeCt', {}))
})

test('correctly compares `undefined` by value when used as the type', (t) => {
  t.true(isType(undefined, undefined))
})

test('correctly compares `null` by value when used as the type', (t) => {
  t.true(isType(null, null))
})

test('treats `null` and `undefined` as different when used as the type', (t) => {
  t.false(isType(null, undefined))
  t.false(isType(undefined, null))
})

test('works with our `type` function for strings', (t) => {
  t.true(isType(type('hello'), 'hello'))
})

test('works with our `type` function for numbers', (t) => {
  t.true(isType(type(123), 123))
})

test('works with our `type` function for booleans', (t) => {
  t.true(isType(type(true), true))
  t.true(isType(type(false), false))
})

test('works with our `type` function for objects', (t) => {
  t.true(isType(type({}), ({})))
})

test('works with our `type` function for arrays', (t) => {
  t.true(isType(type([]), []))
})

test('works with our `type` function for functions', (t) => {
  t.true(isType(type(() => {}), () => {}))
})

test('works with our `type` function for promises', (t) => {
  t.true(isType(type(Promise.resolve()), Promise.resolve())) // eslint-disable-line
})

