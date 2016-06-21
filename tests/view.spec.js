var lens  = Redash.lens
  , view  = Redash.view
  , assoc = Redash.assoc
  , prop  = Redash.prop

describe('(Function) view', function () {
  it('Should be a curried binary function', function () {
    view.should.have.length(2)

    var noop = function () {}
    view(lens(noop)).should.be.a('function')
  })

  it('Should properly apply the lens getter to the target', function () {
    var fooLens = lens(prop('foo'), assoc('foo'))

    view(fooLens, { foo: 'bar' })
      .should.equal('bar')
  })
})
