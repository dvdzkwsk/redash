/** @jsx h */
import { h, Component } from 'preact'
import marked from 'marked'
import Prism from 'prismjs'

const pure = (WrappedComponent) => {
  return class PureComponent extends Component {
    shouldComponentUpdate () {
      return false
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

const debounce = (ms, fn) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), ms)
  }
}

let onScroll
try {
  let listeners = []
  window.addEventListener('scroll', debounce(150, () => {
    if (!listeners.length) return
    const winHeight = window.innerHeight
    listeners.slice().forEach(fn => fn(winHeight))
  }))
  onScroll = (fn) => {
    listeners.push(fn)
    return () => {
      listeners = listeners.filter(f => f !== fn)
    }
  }
} catch (e) {
  onScroll = () => () => {}
}

class Example extends Component {
  constructor (props, ctx) {
    super(props, ctx)
    this.state = {
      highlighted: false,
      content: props.children[0],
    }
  }

  componentDidMount () {
    this._highlight()
  }

  componentWillUnmount () {
    this._destroyScrollWatch && this._destroyScrollWatch()
  }

  _onViewScroll = (windowHeight) => {
    this._highlightIfNeeded(windowHeight)
  }

  _onRef = (node) => {
    return // temporarily highlighting everything in prod
    this._node = node
    this._destroyScrollWatch = onScroll(this._onViewScroll)
    this._highlightIfNeeded(window.innerHeight)
  }

  _highlightIfNeeded = (windowHeight) => {
    if (!this._node || this.state.highlighted) return

    const nodeRect = this._node.getBoundingClientRect()
    if (nodeRect.top > 0 && nodeRect.top < windowHeight) {
      this._highlight()
    }
  }

  _highlight = () => {
    this._destroyScrollWatch && this._destroyScrollWatch()
    this.setState({
      highlighted: true,
      content: Prism.highlight(this.state.content, Prism.languages.javascript),
    })
  }

  render () {
    let className = 'doc-card__example '
    className += this.state.highlighted ? 'language-javascript' : 'language-none'
    return (
      <pre className={className} ref={this._onRef}>
        <code dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </pre>
    )
  }
}

const DocBlock = ({ name, signature, description, examples, since, see }) => {
  const id = toLower(name)
  return (
    <div className='doc-card'>
      <h3 id={id} className='mt-0 h2'>
        {name}
        {' '}
        <small className='text-muted' style={{ fontSize: '0.5em' }}>
          {since}
        </small>
      </h3>
      <div
        className='markdown-body'
        dangerouslySetInnerHTML={{ __html: marked(description || '') }}
      />
      {!isEmpty(see) && (
        <h4 className='lead mt-3 font-weight-normal'>
          Related:
          {' '}
          {map(fn => (
            <a
              key={fn}
              href={`#${toLower(fn)}`}
              className='doc-card__related-link'
            >
              {fn}
            </a>
          ), see)}
        </h4>
      )}
      <hr />
      {mapi((example, i) => (
        <Example key={i}>{example}</Example>
      ), examples)}
    </div>
  )
}

export default pure(DocBlock)
