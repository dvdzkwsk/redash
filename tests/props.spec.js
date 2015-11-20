var props = Daedalus.props

describe('(Function) props', function () {
  it('Should be a function.', function () {
    expect(props).to.be.a('function')
  })
  
  it('Should be curried.', function () {
    expect(props(['foo', 'bar'])).to.be.a('function')
  })
  
  it('Should pull all requested props from the target object.', function () {
    expect(props(['foo', 'bar'])({ foo : 'FOO', bar : 'BAR' }))
      .to.deep.equal(['FOO', 'BAR'])
  })
  
  it('Should return undefined for properties that are not found.', function () {
    expect(props(['foo', 'bar'])({ foo : 'FOO'}))
      .to.deep.equal(['FOO', undefined])
  })
});