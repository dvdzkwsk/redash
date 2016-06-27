var filter = Redash.filter

describe('(Function) filter', function () {
  it('Should properly report its arity (is binary)', function () {
    filter.should.have.length(2)
  })

  it('Should be curried', function () {
    filter(function () {}).should.be.a('function')
  })

  it('Should include only items where the predicate returns true', function () {
    var isEven = function (x) { return x % 2 === 0 }

    filter(isEven, [1, 2, 3, 4, 5]).should.deep.equal([2, 4])
    filter(isEven, [1, 3, 5, 7]).should.deep.equal([])
  })

  it('Should return a new list even if no items are excluded', function () {
    var evens  = [2, 4, 6, 8]
      , isEven = function (x) { return x % 2 === 0 }
      , filtered

    filtered = filter(isEven, evens)
    filtered.should.not.equal(evens)  // compare references
    filtered.should.deep.equal(evens) // compare identity
  })

  it('Should handle empty lists', function () {
    var spy = sinon.spy()
      , filtered

    filtered = filter(spy, [])
    spy.should.not.have.been.called()
    filtered.should.deep.equal([])
  })

  it('Should return a new array even if the supplied array is empty', function () {
    var spy = sinon.spy()
      , xs  = []
      , filtered

    filtered = filter(spy, xs)
    spy.should.not.have.been.called()
    filtered.should.not.equal(xs)  // compare references
    filtered.should.deep.equal([]) // compare equality ([] for explicitness)
  })
})
