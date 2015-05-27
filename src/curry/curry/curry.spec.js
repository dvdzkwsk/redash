var _curry = require('.');

// --------------------------
// Helpers
// --------------------------
function binaryAdd (a, b) {
  return a + b;
}

function ternaryAdd (a, b, c) {
  return a + b + c;
}

// --------------------------
// Test Definitions
// --------------------------
describe('.curry()', function () {

  it('Should return a function.', function () {
    expect(_curry(binaryAdd)).to.be.a.function;
  });

  it('Should return a function if only 1 argument is provided to a binary function.', function () {
    var curriedAdd = _curry(binaryAdd);

    expect(curriedAdd(1)).to.be.a.function;
  });

  it('Should fully apply a binary function when both arguments are provided.', function () {
    var curriedAdd = _curry(binaryAdd);

    expect(curriedAdd(1)(2)).to.equal(3);
    expect(curriedAdd(1, 2)).to.equal(3);
  });

  it('Should ignore calls without any new arguments.', function () {
    var curriedAdd = _curry(binaryAdd);

    expect(curriedAdd(1)()()(2)).to.equal(3);
  });

  it('Should fully apply the function if all arguments are provided when first called.', function () {
    expect(_curry(binaryAdd, 1, 2)).to.be.a.function;
  });
});
