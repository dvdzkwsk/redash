/** @jsx h */
import { h, Component } from 'preact'
import DocBlock from './DocBlock'

const Navbar = () =>
  <nav className='navbar navbar-light sticky-top' style={{ color: '#fff' }}>
    <a className='navbar-brand mr-auto'>
      <span className='r'>Re</span>
      dash
    </a>
  </nav>

const TableOfContents = ({ functions }) => (
  <div className='toc'>
    <form className='toc__search-form d-flex align-items-center'>
      <input
        type='text'
        className='form-control toc__search'
        placeholder='Search...'
      />
    </form>
    <nav>
      <ul className='toc__items'>
        {map(({ name }) => (
          <li key={name} className='toc__item' data-name={name}>
            <a className='toc__link' href={`#${toLower(name)}`}>
              {name}
            </a>
          </li>
        ), functions)}
      </ul>
    </nav>
  </div>
)

class App extends Component {
  render () {
    const functions = this.props.api

    return (
      <div style={{ height: '100%' }}>
        <Navbar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2 toc-wrapper'>
              <TableOfContents functions={functions} />
            </div>
            <div className='col-10'>
              <main>
                {map(fn => (
                  <DocBlock key={fn.name} {...fn} />
                ), functions)}
              </main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
