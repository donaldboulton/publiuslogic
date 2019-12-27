import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const Search = () => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <div className='menu-item' itemScope='itemScope' itemType='https://schema.org/SiteNavigationElement'>
        <SearchBox searchIndex={data.siteSearchIndex.index} />
      </div>
    )}
  />
)

export default Search
