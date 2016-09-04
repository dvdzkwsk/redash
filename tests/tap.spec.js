var tap = Redash.tap

describe('(Function) tap', (t) => {
  var _spies

  beforeEach(function () {
    _spies = {}
    _spies.noop = sinon.spy()
  })

  test('return a function.', (t) => {
    tap.should.be.a('function')
  })

  describe('The resulting function...', (t) => {
    var _tapped

    beforeEach(function () {
      _tapped = tap(function () {
        return null
      })
    })

    test('return the argument it receives.', (t) => {
      _tapped('a').should.equal('a')
    })
  })
})
