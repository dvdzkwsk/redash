import React from 'react'
import DocBlock from './DocBlock'
import REPL from './REPL'

const SideNavigation = ({ functions }) => (
  <nav>
    {map(({ name }) => (
      <a key={name} href={`#${toLower(name)}`}>
        {name}
      </a>
    ), functions)}
  </nav>
)

class APIDocs extends React.PureComponent {
  render () {
    return (
      <div>
        {map(func => (
          <DocBlock
            key={func.name}
            {...func}
            onTryInREPL={this.props.onTryInREPL}
          />
        ), this.props.functions)}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    replValue: '',
    replVisible: true,
  }

  _onTryInREPL = (code) => {
    this.setState({
      replValue: code,
      replVisible: true,
    })
  }

  _onREPLChange = (code) => {
    this.setState({ replValue: code })
  }

  _onHideREPL = () => {
    this.setState({ replVisible: false })
  }

  render () {
    const { replValue, replVisible } = this.state
    const { functions } = this.props

    return (
      <div>
        <SideNavigation functions={functions} />
        <main className='container'>
          <APIDocs
            functions={functions}
            onTryInREPL={this._onTryInREPL}
          />
        </main>
        <div className={`repl-container ${replVisible ? 'visible' : ''}`}>
          <REPL
            value={replValue}
            onChange={this._onREPLChange}
          />
          <button
            className='btn btn-outline-secondary repl__hide'
            onClick={this._onHideREPL}
          >
            Hide
          </button>
        </div>
      </div>
    )
  }
}

export default App
