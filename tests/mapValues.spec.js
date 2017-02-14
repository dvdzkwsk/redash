const test        = require('ava')
    , sinon       = require('sinon')
    , { mapValues } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(mapValues.length, 2)
})

test('is curried', (t) => {
  t.is(typeof mapValues(() => {}), 'function')
})

test('calls the transformer with a single argument: value', (t) => {
  const spy = sinon.spy()
  mapValues(spy, { a: 1 })
  t.true(spy.calledWithExactly(1))
})

test('transforms own enumerable properties', (t) => {
  t.deepEqual(
    mapValues(x => x * 2, { a: 1, b: 2 }),
    { a: 2, b: 4 })
})

test('ignores inherited properties', (t) => {
  function A () {}
  A.prototype.foo = () => {}
  const a = new A()
  a.bar = 5

  t.deepEqual(mapValues(x => x * 2, a), { bar: 10 })
})

test('always returns a new object', (t) => {
  const obj = { a: 1, b: 2, c: 3 }
      , res = mapValues(x => x, obj)

  t.deepEqual(res, obj) // compare values
  t.not(res, obj)       // compare references
})
