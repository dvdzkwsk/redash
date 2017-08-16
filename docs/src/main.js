import React from 'react'
import ReactDOM from 'react-dom'
import docs from '../.api_cache.json'
import './styles/main.scss'

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  const App = require('./components/App').default

  ReactDOM.render(
    <App api={docs} />,
    MOUNT_NODE
  )
}

const __DEV__ = true
if (__DEV__) {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}

render()
