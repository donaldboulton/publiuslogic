import React, { Fragment } from 'react'
import Modali, { useModali } from 'modali'
import { ContactMail } from 'styled-icons/material'
import Button from './ModaliButton'
import './styles.css'

const Email = () => {
  const [emailModal, toggleEmailModal] = useModali()
  return (
    <div>
      <Fragment>
        <Button handleClick={toggleEmailModal}>
          <span> Email <ContactMail /></span>
        </Button>
      </Fragment>
      <Modali.Modal {...emailModal} className='modali-size-large'>
        <div>
          <div className='box'>
            <p className='is-centered'>
                Hi, I'm a Modali! 👋              
            </p>
          </div>
        </div>
      </Modali.Modal>
    </div>
  )
}

export default Email
