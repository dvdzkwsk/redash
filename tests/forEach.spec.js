var forEach = Daedalus.forEach

describe('(Function) forEach', function () {
  var _spies
  
  beforeEach(function () {
    _spies = {}
    _spies.noop = sinon.spy()
  })
  
  it('Should be a function', function () {
    expect(forEach).to.be.a('function')
  })
  
  it('Should be curried', function () {
    var _forEach = forEach(_spies.noop)
    
    _spies.noop.should.not.have.been.called
    expect(_forEach).to.be.a('function')
    
    expect(_forEach([1])).to.be.undefined
    _spies.noop.should.have.been.calledOnce
  })
  
  it('Should not call the provided function if the provided list is empty', function () {
    forEach(_spies.noop, [])
    _spies.noop.should.not.have.been.called
  })
  
  it('Should call the provided function with each item in the list', function () {
    _spies.noop.should.not.have.been.called
    
    forEach(_spies.noop, [1,2,3])
    
    _spies.noop.should.have.been.calledThrice
    _spies.noop.getCall(0).should.have.been.calledWith(1)
    _spies.noop.getCall(1).should.have.been.calledWith(2)
    _spies.noop.getCall(2).should.have.been.calledWith(3)
  })
  
  it('Should provide the index as the second argument to the callback function', function () {
    forEach(_spies.noop, [1,2,3])
    _spies.noop.getCall(0).should.have.been.calledWith(1, 0)
    _spies.noop.getCall(1).should.have.been.calledWith(2, 1)
    _spies.noop.getCall(2).should.have.been.calledWith(3, 2)
  })
})