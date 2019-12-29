import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ListItem = ({ location, item }) => {
  return <ListItemLink to={location.pathname + item.url}>{item.title}</ListItemLink>
}

const ListItemLink = styled(Link)`
  display: inline-block;
  padding: 0.2rem 0;
  width: 100%;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  text-decoration: none;
  transition: color ${props => props.theme.transition};
  &:hover,
  &:focus {
    color: ${props => props.theme.white};
  }
`

ListItem.propTypes = {
  location: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default ListItem

