const test     = require('ava')
    , { type } = require('../dist/fp-standard')

test('properly reports its arity (is unary)', (t) => {
  t.is(type.length, 1)
})

test('returns "Nil" for undefined', (t) => {
  t.is(type(undefined), 'Nil')
})

test('returns "Nil" for null', (t) => {
  t.is(type(null), 'Nil')
})

test('returns "Boolean" for boolean literals', (t) => {
  t.is(type(true), 'Boolean')
})

test('returns "Boolean" for instances of Boolean', (t) => {
  t.is(type(new Boolean()), 'Boolean')
})

test('returns "String" for string literals', (t) => {
  t.is(type(''), 'String')
})

test('returns "String" for instances of String', (t) => {
  t.is(type(new String()), 'String')
})

test('returns "Number" for number literals', (t) => {
  t.is(type(1), 'Number')
})

test('returns "Number" for instances of Number', (t) => {
  t.is(type(new Number()), 'Number')
})

test('returns "Array" for array literals', (t) => {
  t.is(type([]), 'Array')
})

test('returns "Array" for instances of Array', (t) => {
  t.is(type(new Array()), 'Array')
})

test('returns "Function" for function literals', (t) => {
  t.is(type(() => {}), 'Function')
})

test('returns "Function" for instances of Function', (t) => {
  t.is(type(new Function()), 'Function')
})

test('returns "Function" for function literals', (t) => {
  t.is(type(() => {}), 'Function')
})

test('returns "Object" for object literals', (t) => {
  t.is(type({}), 'Object')
})

test('returns "Object" for instances of Object', (t) => {
  t.is(type(new Object()), 'Object')
})

test('returns "Promise" for instances of Promise', (t) => {
  t.is(type(new Promise(res => res())), 'Promise')
})

