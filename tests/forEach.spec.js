const test        = require('ava')
    , sinon       = require('sinon')
    , { forEach } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(forEach.length, 2)
})

test('is curried', (t) => {
  t.is(typeof forEach(() => {}), 'function')
})

test('calls the provided function with each item in the list', (t) => {
  const spy = sinon.spy()

  forEach(spy, [1, 2, 3])
  t.is(spy.callCount, 3)
  t.true(spy.getCall(0).calledWithExactly(1))
  t.true(spy.getCall(1).calledWithExactly(2))
  t.true(spy.getCall(2).calledWithExactly(3))
})

test('does not call the provided function if the array is empty', (t) => {
  const spy = sinon.spy()

  forEach(spy, [])
  t.is(spy.callCount, 0)
})
