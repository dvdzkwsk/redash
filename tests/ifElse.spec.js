var ifElse = Redash.ifElse

describe('(Function) ifElse', (t) => {
  test('properly report its arity (is ternary)', (t) => {
    ifElse.should.have.length(3)
  })

  test('be curried', (t) => {
    ifElse(function () {}).should.be.a('function')
    ifElse(function () {}, function () {}).should.be.a('function')
  })

  test('return a unary function', (t) => {
    var fn = function () {}

    ifElse(fn, fn, fn).should.be.a('function')
    ifElse(fn, fn, fn).should.have.length(1)
  })

  test('call the condition when the supplied argument', (t) => {
    var cond = sinon.spy()
      , noop = function () {}

    ifElse(cond, noop, noop)('hello')
    cond.should.have.been.calledWithExactly('hello')
  })

  describe('When the predicate returns true...', (t) => {
    test('only call the `whenTrue` function', (t) => {
      var cond      = function () { return true }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenFalse.should.not.have.been.called()
      whenTrue.should.have.been.calledOnce()
    })

    test('pass the original argument to the `whenTrue` function', (t) => {
      var cond      = function () { return true }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenTrue.should.have.been.calledWithExactly('hello')
    })

    test('return the result of the `whenTrue` function', (t) => {
      var cond      = function () { return true }
        , whenTrue  = function () { return 'foo' }
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
        .should.equal('foo')
    })
  })

  describe('When the predicate returns false...', (t) => {
    test('only call the `whenFalse` function', (t) => {
      var cond      = function () { return false }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenTrue.should.not.have.been.called()
      whenFalse.should.have.been.calledOnce()
    })

    test('pass the original argument to the `whenFalse` function', (t) => {
      var cond      = function () { return false }
        , whenTrue  = sinon.spy()
        , whenFalse = sinon.spy()

      ifElse(cond, whenTrue, whenFalse)('hello')
      whenFalse.should.have.been.calledWithExactly('hello')
    })

    test('return the result of the `whenFalse` function', (t) => {
      var cond      = function () { return false }
        , whenTrue  = sinon.spy()
        , whenFalse = function () { return 'foo' }

      ifElse(cond, whenTrue, whenFalse)('hello')
        .should.equal('foo')
    })
  })
})
