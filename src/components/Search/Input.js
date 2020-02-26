import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Form, Input } from './styles'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      className='luna__input'
      type='search'
      placeholder='Search'
      aria-label='Search'
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </Form>
))
