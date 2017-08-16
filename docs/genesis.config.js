const path = require('path')

module.exports = {
  templatePath: path.resolve(__dirname, './src/index.html'),
  entry: [
    path.resolve(__dirname, './src/main.preload'),
    path.resolve(__dirname, './src/main'),
  ],
}
