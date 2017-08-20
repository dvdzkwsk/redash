/** @jsx h */
import { h, render as renderToDOM } from 'preact'
import docs from '../.api_cache.json'
import './styles/main.scss'

const MOUNT_NODE = document.getElementById('root')

let root
const render = () => {
  const App = require('./components/App').default
  root = renderToDOM(<App api={docs} />, MOUNT_NODE, root)
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    setImmediate(render)
  })
}

;(function init () {
  render()
  require('./main.static')
})()
