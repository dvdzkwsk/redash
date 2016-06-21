var flip = Redash.flip

describe('(Function) flip', function () {
  it('Should reverse the arguments before invoking the original function', function () {
    function fn (a0, a1, a2) {
      return [].slice.call(arguments)
    }
    var args = flip(fn)(3, 2, 1)
    args.should.deep.equal([1, 2, 3])
  })

  it('Should returned a function of equal arity to the original', function () {
    flip(function () {}).should.have.length(0)
    flip(function (a0) {}).should.have.length(1)
    flip(function (a0, a1) {}).should.have.length(2)
    flip(function (a0, a1, a2) {}).should.have.length(3)
    flip(function (a0, a1, a2, a3) {}).should.have.length(4)
    flip(function (a0, a1, a2, a3, a4) {}).should.have.length(5)
    flip(function (a0, a1, a2, a3, a4, a5) {}).should.have.length(6)
  })
})
