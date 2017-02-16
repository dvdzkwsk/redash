import React from 'react'
import marked from 'marked'

const Signature = ({ signature }) => (
  <p>
    <code>{signature}</code>
  </p>
)

const Example = ({ children }) => (
  <pre className='language-javascript'>
    <code>{children}</code>
  </pre>
)

class DocBlock extends React.PureComponent {
  _onTryInREPL = () => {
    const cleanedExample = pipe([
      join('\n'),
      split('\n'),
      map(pipe([split('//'), head, trim])),
      compact,
      join('\n')
    ])(this.props.examples)

    this.props.onTryInREPL(cleanedExample)
  }

  render () {
    const { name, signature, description, examples, since, see } = this.props
    return (
      <div>
        <h2 id={toLower(name)}>
          {name}
        </h2>
        {mapi((signature, i) => (
          <Signature key={i} signature={signature} />
        ), split('\n', signature))}
        <div dangerouslySetInnerHTML={{ __html: marked(description || '') }} />
        {mapi((example, i) => (
          <div key={i}>
            <div className='clearfix'>
              <button className='btn btn-primary try-in-repl' onClick={this._onTryInREPL}>
                Try in REPL
              </button>
            </div>
            <Example>{example}</Example>
          </div>
        ), examples)}
      </div>
    )
  }
}

export default DocBlock
