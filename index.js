var _api = {},
    LIBS_TO_COMPILE = [
      'collections'
    ];

function extend (base, extender) {
  var prop;

  for (prop in extender) {
    if (extender.hasOwnProperty(prop)) {
      if (typeof base[prop] === 'undefined') {
        base[prop] = extender[prop];
      } else {
        throw new Error(prop + ' already exists in base.');
      }
    }
  }
}

LIBS_TO_COMPILE.forEach(function (lib) {
  extend(_api, require('./lib/' + lib + '/_exports'));
});

module.exports = exports = _api;
