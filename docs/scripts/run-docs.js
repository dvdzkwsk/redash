const path = require('path')

require('@technologyadvice/genesis-core')({
  templatePath: path.resolve(__dirname, '../src/index.html'),
  entry: [
    path.resolve(__dirname, '../src/main.preload'),
    path.resolve(__dirname, '../src/main'),
  ],
}).start()
