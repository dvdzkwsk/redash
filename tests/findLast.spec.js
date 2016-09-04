var findLast = Redash.findLast

describe('(Function) findLast', (t) => {
  test('properly report its arity (is binary)', (t) => {
    findLast.should.have.length(2)
  })

  test('be curried', (t) => {
    findLast(function () {}).should.be.a('function')
  })

  test('return the last item in a list that matches the predicate', (t) => {
    var a = { id: 1 }
      , b = { id: 1 }
      , c = { id: 1 }

    findLast(function (x) { return x.id === 1 }, [a, b, c])
      .should.equal(c)
  })

  test('short circuit', (t) => {
    var spy = sinon.spy(function (x) { return x === 3 })

    findLast(spy, [1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 10])
    spy.callCount.should.equal(3)
  })
})
