import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import { DesktopNavDiv } from './styles'
import SlideMenu from '../SlideMenu'

const NavBar = () => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <DesktopNavDiv>
        <SearchBox searchIndex={data.siteSearchIndex.index} />
        <SlideMenu />
      </DesktopNavDiv>
    )}
  />
)

export default NavBar
