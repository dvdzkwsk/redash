const test    = require('ava')
    , sinon   = require('sinon')
    , { any } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(2, any.length)
})

test('is curried', (t) => {
  t.is('function', typeof any(() => {}))
})

test('sequentially provides each element in the list to the predicate', (t) => {
  const spy = sinon.spy(() => false)

  any(spy, [1, 2, 3])
  t.deepEqual([1], spy.firstCall.args)
  t.deepEqual([2], spy.secondCall.args)
  t.deepEqual([3], spy.thirdCall.args)
})

test('returns true if any item matches the predicate', (t) => {
  t.true(any((x) => x === 3, [1, 2, 3]))
})

test('short circuits when an item matches the predicate', (t) => {
  const spy = sinon.spy((x) => x === 3)

  any(spy, [1, 2, 3, 4, 5, 6, 7])
  t.is(3, spy.callCount)
})

test('returns false if no item matches the predicate', (t) => {
  t.false(any(() => false, [1, 2, 3, 4, 5]))
})

// TODO(zuko): should this really be false?
test('returns false if the list is empty', (t) => {
  t.false(any(() => true, []))
})
