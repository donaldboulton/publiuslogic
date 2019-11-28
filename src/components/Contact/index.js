import React from 'react'
import Modali, { useModali } from 'modali'
import { Mail } from 'styled-icons/material'
import Button from '../Email/ModaliButton'
import EmailForm from '../EmailForm'

const ContactEmail = () => {
  const [completeExample, toggleCompleteModal] = useModali({
    animated: true,
    title: 'Send Us a Email 📫',
    message: 'Email Addresses are Private.',
  })

  return (
    <div>
      <>
        <Button handleClick={toggleCompleteModal}>
          <Mail className='button is-medium' />
        </Button>
      </>
      <Modali.Modal {...completeExample} className='modali-size-large'>
        <div>
          <p>
            <div className='column'>
              <EmailForm />
            </div>
          </p>
        </div>
      </Modali.Modal>
    </div>
  )
}

export default ContactEmail
