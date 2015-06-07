var functions = require('./index'),
    EXPECTED_FUNCTIONS = [
      'compose',
      'curry',
      'curryN'
    ];

describe('functions', function () {
  it('Should be an object.', function () {
    expect(functions).to.be.an.object;
  });

  EXPECTED_FUNCTIONS.forEach(function (fnName) {
    it('should have a method .' + fnName + '()', function () {
      expect(functions[fnName]).to.be.a.function;
    });
  });
});
