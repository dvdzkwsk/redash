require('../../dist/installer')(global)
const r = require('../src/lib/react')
const { renderToStaticMarkup } = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const app = require('express')()
const docs = require('../.api_cache.json')
const App = require('../src/components/App')
const HTML = require('../src/components/HTML')

const rendered = renderToStaticMarkup(r(App, { functions: docs.api }))
const html = '<!doctype html>' + renderToStaticMarkup(r(HTML, {
  scripts: [
    { inject: true, content: [
      fs.readFileSync(path.resolve(__dirname, '../src/main.js'), 'utf8'),
    ].join('') },
  ],
  styles: [
    { href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.4.1/github-markdown.min.css' },
    { inject: true, content: [
      fs.readFileSync(path.resolve(__dirname, '../src/styles/main.scss'), 'utf8'),
      fs.readFileSync(path.resolve(__dirname, '../src/styles/vendor/klipse.css'), 'utf8'),
    ].join('') },
  ],
}, rendered))

app.get('/', (req, res) => {
  res.send(html)
})
app.listen(3000)
