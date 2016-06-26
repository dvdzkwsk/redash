var cond = Redash.cond

describe('(Function) cond', function () {
  it('Should properly report its arity (is binary)', function () {
    cond.should.have.length(2)
  })

  it('Should be curried', function () {
    cond([]).should.be.a('function')
  })

  it('Should be able to be applied in a single invocation', function () {
    expect(cond([], null)).to.equal(undefined)
  })

  it('Should call the matched function when its predicate is true', function () {
    var pred = function (v) { return true }
      , val  = sinon.spy()

    cond([ [pred, val] ])('HELLO')
    val.should.have.been.calledOnce
    val.should.have.been.calledWithExactly('HELLO')
  })

  it('Should treat each condition predicate and executor as unary', function () {
    var pred = sinon.spy(function () { return true })
      , val  = sinon.spy()

    cond([ [pred, val] ])('a', 'b', 'c')
    pred.should.have.been.calledWithExactly('a')
    val.should.have.been.calledWithExactly('a')
  })

  it('Should return the value of the executor function when its predicate is true', function () {
    var pred = function (v) { return true }
      , val  = function () { return 'FOOBAR' }

    cond([ [pred, val] ])('HELLO').should.equal('FOOBAR')
  })

  it('Should handle truthy values', function () {
    var pred = function () { return {} }
      , val  = sinon.spy()

    cond([ [pred, val] ])(5)
    val.should.have.been.calledOnce
  })

  it('Should short circuit when a true condition is reached', function () {
    var pred = function () { return true }
      , val  = sinon.spy()

    cond([ [pred, val], [pred, val] ])(5)
    val.should.have.been.calledOnce
  })

  it('Should call the condition predicate with the correct `this` binding', function () {
    var ctx  = {}
      , ctxs = []
      , pred = function () { ctxs.push(this); return false }
      , val  = function () {}

    cond.call(ctx, [ [pred, val] ], ['hello'])
    ctxs.should.deep.equal([ctx])
  })

  it('Should call the matched condition executor with the correct `this` binding', function () {
    var ctx  = {}
      , ctxs = []
      , pred = function () { return true }
      , val = function () { ctxs.push(this) }

    cond.call(ctx, [ [pred, val] ], ['hello'])
    ctxs.should.deep.equal([ctx])
  })

  it('Should return `undefined` when conditions is empty', function () {
    expect(cond([], null)).to.equal(undefined)
  })

  it('Should return `undefined` when no condition is matched', function () {
    expect(cond([
      [function () { return false }, function () { return 'value' }]
    , [function () { return false }, function () { return 'value' }]
    ], null)).to.equal(undefined)
  })
})
