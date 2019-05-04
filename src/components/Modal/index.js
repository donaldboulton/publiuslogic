import React from 'react'
import Modali, { useModali } from 'modali'

const App = () => {
  const [firstModal, toggleFirstModal] = useModali()
  const [secondModal, toggleSecondModal] = useModali()
  
  return (
    <div className='app'>
      <button onClick={toggleFirstModal}>
        Click me to open the first modal!
      </button>
      <button onClick={toggleSecondModal}>
        Click me to open the second modal!
      </button>
      <Modali.Modal {...firstModal}>
        Hi, I'm the first Modali
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        And I'm the second Modali
      </Modali.Modal>
    </div>
  )
}

export default App
