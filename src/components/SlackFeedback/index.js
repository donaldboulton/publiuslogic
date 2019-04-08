import React from 'react'
import SlackFeedback, { themes } from 'react-slack-feedback'

export { default as dark } from './dark'

const Feedback = () => {
  return (
    <div className='columns'>
      <div className='column is-1 is-offset-1'>
        <div className='content'>
          <SlackFeedback
            open
            channel='#feedback'
            disabled={false}
            errorTimeout={8 * 1000}
            icon={() => <SlackIcon />}
            onClose={() => {}}
            onOpen={() => {}}
            sentTimeout={5 * 1000}
            showChannel
            showIcon
            theme={themes.dark}
            translations={defaultTranslations}
            user='Anonymous'
            onSubmit={(payload, success, error) => {}}
            onImageUpload={(file, success, error) => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default Feedback
