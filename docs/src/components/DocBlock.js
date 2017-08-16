import React from 'react'
import marked from 'marked'

const Signature = ({ signature }) => (
  <p>
    <code>{signature}</code>
  </p>
)

const Example = ({ children }) => (
  <pre className='doc-block__example language-javascript'>
    <code>{children}</code>
  </pre>
)

class DocBlock extends React.PureComponent {
  render () {
    const { name, signature, description, examples, since, see } = this.props
    return (
      <div className='doc-block'>
        <h3 id={toLower(name)} className='mt-0 h2'>
          {name}
        </h3>
        <div
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: marked(description || '') }}
        />
        <hr />
        {mapi((example, i) => (
          <Example key={i}>{example}</Example>
        ), examples)}
      </div>
    )
  }
}

export default DocBlock
