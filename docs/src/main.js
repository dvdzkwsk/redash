import React from 'react'
import ReactDOM from 'react-dom'
import docs from '../.api_cache.json'
import './styles/main.scss'

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default // eslint-disable-line

  ReactDOM.render(
    <App functions={docs.api} />,
    MOUNT_NODE
  )
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e) // eslint-disable-line no-console
      }
    }

    module.hot.accept('./components/App', () => {
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}

render()
