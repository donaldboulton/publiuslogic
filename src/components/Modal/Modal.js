import React from 'react'
import Coffee from '/img/products-full-width.jpg'

import './styles.sass'

const Modal = () => {
  return (
    <div className='modal' id='myModal'>
      <div className='modal-background'><span></span></div>
        <div className='modal-content'>
          <p className='image is-4by3'>
          <img
              src={Coffee}
              alt='Cup of Joe'
              style={{ width: '100%', height: '100%' }}
          />
          </p>
        </div>
        <label className='modal-close is-large' for='element-toggle'></label>
    </div>
    <a className='button is-primary is-large modal-button' data-target='modal-bis'>Launch image modal</a>
  )
}

export default Modal
