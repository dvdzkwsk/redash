var head = Redash.head

describe('(Function) head', function () {
  it('Should be a function.', function () {
    expect(head).to.be.a('function')
  })
  
  it('Should return the first item in an array.', function () {
    expect(head([1,2,3])).to.equal(1)
  })
  
  it('Should return undefined if the array is empty.', function () {
    expect(head([])).to.be.undefined
  })
})
