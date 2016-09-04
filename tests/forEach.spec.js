var forEach = Redash.forEach

describe('(Function) forEach', (t) => {
  var _spies

  beforeEach(function () {
    _spies = {}
    _spies.noop = sinon.spy()
  })

  test('be a function', (t) => {
    expect(forEach).to.be.a('function')
  })

  test('be curried', (t) => {
    var _forEach = forEach(_spies.noop)

    _spies.noop.should.not.have.been.called
    expect(_forEach).to.be.a('function')

    expect(_forEach([1])).to.be.undefined
    _spies.noop.should.have.been.calledOnce
  })

  test('not call the provided function if the provided list is empty', (t) => {
    forEach(_spies.noop, [])
    _spies.noop.should.not.have.been.called
  })

  test('call the provided function with each item in the list', (t) => {
    _spies.noop.should.not.have.been.called

    forEach(_spies.noop, [1, 2, 3])

    _spies.noop.should.have.been.calledThrice
    _spies.noop.getCall(0).should.have.been.calledWith(1)
    _spies.noop.getCall(1).should.have.been.calledWith(2)
    _spies.noop.getCall(2).should.have.been.calledWith(3)
  })
})
