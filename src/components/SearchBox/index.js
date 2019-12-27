import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'
export default class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      isActive: false,
    }
  }

  render () {
    return (
      <span className={`navbar-item ${this.state.isActive ? 'is-active' : ''}`} itemProp='potentialAction' itemScope='itemScope' itemType='https://schema.org/SearchAction'>
        <meta itemProp='target' content='https://query.publiuslogic.com/search?q={search_term_string}' />
        Search&nbsp;
        <input
          className='luna__input js-luna__input'
          type='search'
          id='search'
          aria-label='Search Input'
          aria-required='false'
          value={this.state.query}
          // eslint-disable-next-line react/jsx-handler-names
          onChange={this.search}
          itemProp='query-input'
          name='search_term_string'
        />
        <div className='navbar-dropdown'>
          {this.state.results.map(page => (
            <Link aria-label='Results Links' itemProp='url' className='navbar-item' key={page.id} to={page.slug}>{page.title}</Link>
          ))}
        </div>
      </span>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      isActive: !!query,
    })
  };
}
