/** @jsx h */
require('../../dist/installer')(global)
import { h } from 'preact'
import App from '../src/components/App'
import render from 'preact-render-to-string'
import docs from '../.api_cache.json'
import fs from 'fs'
import path from 'path'

const htmlPath = path.resolve(__dirname, '../dist/index.html')
const html = fs.readFileSync(htmlPath, 'utf8')
const rendered = render(<App api={docs} />)

fs.writeFileSync(htmlPath, html.replace(
  '<div id="root" style="height: 100%"></div>',
  `<div id="root" style="height: 100%">${rendered}</div>`,
))
