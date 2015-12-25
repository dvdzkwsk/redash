var findIndex = Redash.findIndex

describe('(Function) findIndex', function () {
  it('Should be a function.', function () {
    expect(findIndex).to.be.a('function')
  })
  
  it('Should be curried to an arity of 2.', function () {
    expect(findIndex()).to.be.a('function')  
  })
  
  it('Should return the index of the first matching item.', function () {
    var equalsC = function (x) { return x === 'c' }
    
    expect(findIndex(equalsC, ['a', 'b', 'c', 'd', 'c'])).to.equal(2)
  })
  
  it('Should work for the last item in a collection.', function () {
    var equalsE = function (x) { return x === 'e' }
    
    expect(findIndex(equalsE, ['a', 'b', 'c', 'd', 'e'])).to.equal(4)
  })
  
  it('Should return -1 if no match is found.', function () {
    var noop = function () {}
    
    expect(findIndex(noop, ['a', 'b', 'c', 'd', 'e'])).to.equal(-1)
  })
})
