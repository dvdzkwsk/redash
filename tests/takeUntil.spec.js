var takeUntil = Redash.takeUntil

describe('(Function) takeUntil', function () {
  var _spies
  
  beforeEach(function () {
    _spies = {}
    _spies.not5 = sinon.stub()
    _spies.not5.returns(false)
    _spies.not5.withArgs(5).returns(true)  
  })
  
  it('Should be a function.', function () {
    expect(takeUntil).to.be.a('function')
  })
  
  it('Should be curried.', function () {
    expect(takeUntil()).to.be.a('function')
  })
  
  it('Should return all items until the predicate matches (exclusive).', function () {
    expect(takeUntil(_spies.not5)([1,2,3,4,5,6,7,8])).to.deep.equal([1,2,3,4])
  })
  
  it('Should return a new array even if it\'s identical to the input.', function () {
    var arr = [1,2,3,4]
    var res = takeUntil(_spies.not5, [1,2,3,4])
    
    expect(res).to.deep.equal([1,2,3,4])
    expect(res).to.not.equal(arr)
  })
})
