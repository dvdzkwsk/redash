require('babel/register');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = require('./build/karma/make')(env);
