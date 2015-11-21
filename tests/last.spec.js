var last = Daedalus.last

describe('(Function) last', function () {
  it('Should be a function.', function () {
    expect(last).to.be.a('function')
  })
  
  it('Should return the last item in an array.', function () {
    expect(last([1,2,3])).to.equal(3)
    expect(last([1])).to.equal(1)
    expect(last([])).to.equal(undefined)
  })
})