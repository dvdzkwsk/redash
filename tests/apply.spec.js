const test      = require('ava')
    , sinon     = require('sinon')
    , { apply } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(apply.length, 2)
})

test('is curried', (t) => {
  t.is(typeof apply(() => {}), 'function')
})

test('applies the list of arguments as individual arguments to the function', (t) => {
  const spy = sinon.spy()
  apply(spy, [1, 2, 3, 4])
  t.true(spy.calledWithExactly(1, 2, 3, 4))
})
