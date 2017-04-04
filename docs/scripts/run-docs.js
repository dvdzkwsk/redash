const path = require('path')

require('genesis-core').dev({
  root: path.resolve(__dirname, '..'),
  app_template: path.resolve(__dirname, '../src/index.html'),
  main: [
    path.resolve(__dirname, '../src/main.preload.js'),
    path.resolve(__dirname, '../src/main.js'),
  ],
  verbose: true,
})
