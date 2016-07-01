var ifElse = Redash.ifElse

describe('(Function) ifElse', function () {
  it('Should properly report its arity (is ternary)', function () {
    ifElse.should.have.length(3)
  })

  it('Should be curried', function () {
    ifElse(function () {}).should.be.a('function')
    ifElse(function () {}, function () {}).should.be.a('function')
  })

  it('Should return a unary function', function () {
    var fn = function () {}

    ifElse(fn, fn, fn).should.be.a('function')
    ifElse(fn, fn, fn).should.have.length(1)
  })

  it('Should call the condition when the supplied argument', function () {
    var cond = sinon.spy()
      , noop = function () {}

    ifElse(cond, noop, noop)('hello')
    cond.should.have.been.calledWithExactly('hello')
  })

  describe('When the predicate returns true...', function () {
    it('Should only call the `whenTrue` function', function () {
      var cond      = function () { return true }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenFalse.should.not.have.been.called()
      whenTrue.should.have.been.calledOnce()
    })

    it('Should pass the original argument to the `whenTrue` function', function () {
      var cond      = function () { return true }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenTrue.should.have.been.calledWithExactly('hello')
    })

    it('Should return the result of the `whenTrue` function', function () {
      var cond      = function () { return true }
        , whenTrue  = function () { return 'foo' }
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
        .should.equal('foo')
    })
  })

  describe('When the predicate returns false...', function () {
    it('Should only call the `whenFalse` function', function () {
      var cond      = function () { return false }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenTrue.should.not.have.been.called()
      whenFalse.should.have.been.calledOnce()
    })

    it('Should pass the original argument to the `whenFalse` function', function () {
      var cond      = function () { return false }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenFalse.should.have.been.calledWithExactly('hello')
    })

    it('Should return the result of the `whenFalse` function', function () {
      var cond      = function () { return false }
        , whenTrue  = sinon.spy()
        , whenFalse = function () { return 'foo' }

      ifElse(cond, whenTrue, whenFalse)('hello')
        .should.equal('foo')
    })
  })
})
