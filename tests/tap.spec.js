var tap = Redash.tap

describe('(Function) tap', function () {
  var _spies

  beforeEach(function () {
    _spies = {}
    _spies.noop = sinon.spy()
  })

  it('Should return a function.', function () {
    tap.should.be.a('function')
  })

  describe('The resulting function...', function () {
    var _tapped

    beforeEach(function () {
      _tapped = tap(function () {
        return null
      })
    })

    it('Should return the argument it receives.', function () {
      _tapped('a').should.equal('a')
    })
  })
})
