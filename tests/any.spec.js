const test    = require('ava')
    , sinon   = require('sinon')
    , { any } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(any.length, 2)
})

test('is curried', (t) => {
  t.is(typeof any(() => {}), 'function')
})

test('sequentially provides each element in the list to the predicate', (t) => {
  const spy = sinon.spy(() => false)

  any(spy, [1, 2, 3])
  t.deepEqual(spy.firstCall.args, [1])
  t.deepEqual(spy.secondCall.args, [2])
  t.deepEqual(spy.thirdCall.args, [3])
})

test('returns true if any item matches the predicate', (t) => {
  t.true(any((x) => x === 3, [1, 2, 3]))
})

test('short circuits when an item matches the predicate', (t) => {
  const spy = sinon.spy((x) => x === 3)

  any(spy, [1, 2, 3, 4, 5, 6, 7])
  t.is(spy.callCount, 3)
})

test('returns false if no item matches the predicate', (t) => {
  t.false(any(() => false, [1, 2, 3, 4, 5]))
})

// TODO(zuko): should this really be false?
test('returns false if the list is empty', (t) => {
  t.false(any(() => true, []))
})
