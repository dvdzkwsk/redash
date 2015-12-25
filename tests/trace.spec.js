var trace = Redash.trace

describe('(Function) trace', function () {
  var _spies
  
  beforeEach(function () {
    _spies = {}
    _spies.noop = sinon.spy()
  })
  
  it('Should be a function.', function () {
    expect(trace).to.be.a('function')
  })
  
  it('Should return a function.', function () {
    expect(trace()).to.be.a('function')
  })
  
  describe('The resulting function...', function () {
    var _traced
    
    beforeEach(function () {
      _traced = trace('Sample trace')
    })
    
    it('Should return the argument it receives.', function () {
      expect(_traced('a')).to.equal('a')
    })
  })
})
