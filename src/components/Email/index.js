import React from 'react'
import Modali, { useModali } from 'modali'
import { EmailIcon } from 'react-share'
import ModaliButton from './ModaliButton'
import EmailForm from '../ContactForm'

const Email = () => {
  const [completeExample, toggleCompleteModal] = useModali({
    animated: true,
    title: 'Send Us a Email 📫',
    message: 'Email Addresses are Private.',
  })
  return (
    <>
      <ModaliButton handleClick={toggleCompleteModal}>
        <EmailIcon
          className='round'
        />
      </ModaliButton>
      <Modali.Modal {...completeExample} className='modali-size-large'>
        <div
          style={{
            marginRight: 2,
            marginLeft: 2,
          }}
        >
          <EmailForm />
        </div>
      </Modali.Modal>
    </>
  )
}

export default Email
