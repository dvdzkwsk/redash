var indexOf = Daedalus.indexOf

describe('(Function) indexOf', function () {
  it('Should be a function.', function () {
    expect(indexOf).to.be.a('function')
  })
  
  it('Should be curried to an arity of 2.', function () {
    expect(indexOf()).to.be.a('function')  
  })
  
  it('Should return the index of the first matching item.', function () {
    expect(indexOf('c', ['a', 'b', 'c', 'd', 'c'])).to.equal(2)
  })
  
  it('Should work for the last item in a collection.', function () {
    expect(indexOf('e', ['a', 'b', 'c', 'd', 'e'])).to.equal(4)
  })
  
  it('Should return -1 if no match is found.', function () {
    expect(indexOf('f', ['a', 'b', 'c', 'd', 'e'])).to.equal(-1)
  })
  
  it('Should only compare by reference.', function () {
    var foo = { foo : 'foo' }
    
    expect(indexOf(foo, [{ foo : 'foo' }])).to.equal(-1)
    expect(indexOf(foo, [foo])).to.equal(0)
  })
})