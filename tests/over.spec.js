var lens  = Redash.lens
  , over  = Redash.over
  , assoc = Redash.assoc
  , prop  = Redash.prop

var xform = function (x) {
  return x.toUpperCase()
}

describe('(Function) over', function () {
  it('Should be a curried ternary function', function () {
    over.should.have.length(3)

    var noop = function () {}
    over(lens(noop)).should.be.a('function')
    over(lens(noop), noop).should.be.a('function')
  })

  it('Should call the getter exactly once', function () {
    var getter = sinon.spy(prop('foo'))

    over(lens(getter, assoc('foo')), xform, { foo: 'bar' })
    getter.should.have.been.calledOnce
  })

  it('Should call the setter exactly once', function () {
    var setter = sinon.spy(assoc('foo'))

    over(lens(prop('foo'), setter), xform, { foo: 'bar' })
    setter.should.have.been.calledOnce
  })

  it('Should call the transformer exactly once', function () {
    var _xform = sinon.spy(xform)

    over(lens(prop('foo'), assoc('foo')), _xform, { foo: 'bar' })
    _xform.should.have.been.calledOnce
  })

  it('Should return the result of the transformation', function () {
    over(lens(prop('foo'), assoc('foo')), xform, { foo: 'bar' })
      .should.deep.equal({
        foo: 'BAR'
      })
  })
})
