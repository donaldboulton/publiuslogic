import React from 'react'
import { getUser } from './services/auth'

const Profile = () => {
  const user = getUser()
  return (
    <div className='container'>
      <div className='columns margin-top-15'>
        <div className='column is-12'>
          <div>
            <h1>Your profile</h1>
            <ul>
              <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
              <li>E-mail: {user.email}</li>
            </ul>
          </div>
          <div className='steps' id='stepsDemo'>
            <div className='step-item is-active is-success'>
              <div className='step-marker'>1</div>
              <div className='step-details'>
                <p className='step-title'>Account</p>
              </div>
            </div>
            <div className='step-item'>
              <div className='step-marker'>2</div>
              <div className='step-details'>
                <p className='step-title'>Profile</p>
              </div>
            </div>
            <div className='step-item'>
              <div className='step-marker'>3</div>
              <div className='step-details'>
                <p className='step-title'>Social</p>
              </div>
            </div>
            <div className='step-item'>
              <div className='step-marker'>4</div>
              <div className='step-details'>
                <p className='step-title'>Finish</p>
              </div>
            </div>
            <div className='steps-content'>
              <div className='step-content has-text-centered is-active'>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Username</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control'>
                        <input className='input' name='username' id='username' type='text' placeholder='Username' autoFocus data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Password</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control has-icon has-icon-right'>
                        <input className='input' type='password' name='password' id='password' placeholder='Password' data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Confirm password</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control has-icon has-icon-right'>
                        <input className='input' type='password' name='password_confirm' id='password_confirm' placeholder='Confirm password' data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='step-content has-text-centered'>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Firstname</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control'>
                        <input className='input' name='firstname' id='firstname' type='text' placeholder='Firstname' autoFocus data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Last name</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control has-icon has-icon-right'>
                        <input className='input' type='text' name='lastname' id='lastname' placeholder='Last name' data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Email</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control has-icon has-icon-right'>
                        <input className='input' type='email' name='email' id='email' placeholder='Email' data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='step-content has-text-centered'>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Facebook account</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control'>
                        <input className='input' name='facebook' id='facebook' type='text' placeholder='Facebook account url' autoFocus data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Twitter account</label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control'>
                        <input className='input' name='twitter' id='twitter' type='text' placeholder='Twitter account url' autoFocus data-validate='require' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='step-content has-text-centered'>
                <h1 className='title is-4'>Your account is now created!</h1>
              </div>
            </div>
            <div className='steps-actions'>
              <div className='steps-action'>
                <a href='#' data-nav='previous' className='button is-light'>Previous</a>
              </div>
              <div className='steps-action'>
                <a href='#' data-nav='next' className='button is-light'>Next</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
