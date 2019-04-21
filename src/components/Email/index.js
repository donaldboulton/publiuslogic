import React from 'react'
import Modali, { useModali } from 'modali'
import Button from './ModaliButton'
import email from '../../img/enewsletter_icon.png'

const Email = () => {
  const [emailModal, toggleEmailModal] = useModali()
  return (
    <div className='columns'>
      <div className='column'>
        <Button handleClick={toggleEmailModal}>
          <img
            src={email}
            alt='PubliusLogic'
          />
        </Button>
      </div>
      <Modali.Modal {...emailModal}>
        <div className='column'>
          <div className='box'>
            <p>
                Hi, I'm a Modali! 👋
            </p>
          </div>
        </div>
      </Modali.Modal>
    </div>
  )
}

export default Email
