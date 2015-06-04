require('./utils/object-assign-polyfill');

var DAEDALUS = Object.assign(
  {
    VERSION : '0.0.0'
  },
  require('./curry'),
  require('./collections'),
  require('./objects')
);

module.exports = exports = DAEDALUS;
