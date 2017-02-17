import React from 'react'
import AceEditor from 'react-ace'
import 'brace'
import 'brace/mode/javascript'
import 'brace/theme/tomorrow_night_eighties'

const evaluate = (code) => {
  try {
    return eval(code) // eslint-disable-line
  } catch (e) {
    return e
  }
}

class REPL extends React.Component {
  _evalTimeout
  state = {
    result: 'waiting...',
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      if (this._evalTimeout) {
        clearTimeout(this._evalTimeout)
      } else {
        this.setState({
          result: 'waiting...',
        })
      }
      this._evalTimeout = setTimeout(() => {
        this.setState({
          result: evaluate(this.props.value),
        })
      }, 500)
    }
  }

  componentWillUnmount () {
    if (this._evalTimeout) {
      clearTimeout(this._evalTimeout)
    }
  }

  render () {
    const { result } = this.state
    return (
      <div className='repl'>
        <div className='repl__editor'>
          <AceEditor
            mode='javascript'
            theme='tomorrow_night_eighties'
            onChange={this.props.onChange}
            fontSize={14}
            tabSize={2}
            showPrintMargin={false}
            value={this.props.value}
            editorProps={{
              $rules: {
              }
            }}
          />
        </div>
        <div className='repl__result'>
          {`> ${typeof result === 'object' ? JSON.stringify(result) : result}`}
        </div>
      </div>
    )
  }
}

export default REPL
