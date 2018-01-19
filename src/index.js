import React, { Component } from 'react'
import { render } from 'react-dom'
import queryString from 'query-string'
import history from './history'
import TypeLink from './TypeLink'

const Toolbar = () => (
  <ul>
    <li>
      <TypeLink>Top Results</TypeLink>
    </li>
    <li>
      <TypeLink to="product">Store</TypeLink>
    </li>
    <li>
      <TypeLink to="guide">Guides</TypeLink>
    </li>
  </ul>
)

const TopResultsPage = () => (
  <div>
    <h1>Top Results</h1>
  </div>
)

const StorePage = () => (
  <div>
    <h1>Store</h1>
  </div>
)

const GuidesPage = () => (
  <div>
    <h1>Guides</h1>
  </div>
)

const TYPE_COMPONENTS = {
  product: StorePage,
  guide: GuidesPage,
}

class SearchPage extends Component {
  constructor(props) {
    super(props)

    const { query = '', type = '' } = queryString.parse(window.location.search)
    this.state = { query, type }
  }

  componentDidMount() {
    this.unlisten = history.listen(location => {
      const { type = '' } = queryString.parse(location.search)
      this.setState({ type })
    })
  }

  componentWillUnMount() {
    this.unlisten()
  }

  render() {
    const { query, type } = this.state

    const Page = TYPE_COMPONENTS[type] || TopResultsPage

    return (
      <div>
        <Toolbar />
        <Page query={query} />
      </div>
    )
  }
}

render(<SearchPage />, document.getElementById('root'))
