var compose = require('./'),
    noop    = require('../../utils/noop');

describe('.compose()', function () {
  it('Should return a function regardless of how many arguments are applied.', function () {
    expect(compose()).to.be.a.function;
    expect(compose(noop)).to.be.a.function;
    expect(compose(noop, noop, noop, noop)).to.be.a.function;
  });

  it('Should call the functions from right to left.', function () {
    var calls = [];

    function right () { calls.unshift('right') }
    function middle () { calls.unshift('middle') }
    function left () { calls.unshift('left') }
    function getCalls () { return calls };

    expect(
      compose(getCalls, left, middle, right)()
    ).to.deep.equal(
      ['left', 'middle', 'right']
    );
  });

  it('Should pass all arguments from the initial invocation to the right-most function.', function () {
    function sliceArgs () {
      return [].slice.apply(arguments);
    }
    function  tap (resp) {
      return resp;
    }

    expect(compose(tap, tap, sliceArgs)(1,2,3)).to.deep.equal([1,2,3]);
  });
});
