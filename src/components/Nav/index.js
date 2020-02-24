import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { useScreenQuery } from '../../hooks/useMediaQuery'
import DesktopNav from './Desktop'
import MobileNav from './Mobile'

export { NavLink, navLinkStyle } from './styles'

const Nav = props =>
  useScreenQuery(`maxPhablet`) ? (
    <MobileNav {...props} />
  ) : (
    <DesktopNav {...props} />
  )

const query = graphql`
  {
    nav: allNavYaml {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Nav {...data.nav} {...props} role='navigation' />}
  />
)

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

