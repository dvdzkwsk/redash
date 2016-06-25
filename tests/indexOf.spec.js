var indexOf = Redash.indexOf

describe('(Function) indexOf', function () {
  it('Should be a curried binary function', function () {
    indexOf().should.be.a('function')
  })

  it('Should return the index of the first matching item', function () {
    indexOf('c', ['a', 'b', 'c', 'd', 'c']).should.equal(2)
  })

  it('Should work for the last item in a collection.', function () {
    indexOf('e', ['a', 'b', 'c', 'd', 'e']).should.equal(4)
  })

  it('Should return -1 if no match is found', function () {
    indexOf('f', ['a', 'b', 'c', 'd', 'e']).should.equal(-1)
  })

  it('Should only compare by reference', function () {
    var foo = { foo : 'foo' }

    indexOf(foo, [{ foo : 'foo' }]).should.equal(-1)
    indexOf(foo, [foo]).should.equal(0)
  })
})
