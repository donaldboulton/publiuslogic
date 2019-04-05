import React from 'react'
import ReactDOM from 'react-dom'

import './styles.sass'

const StepContext = React.createContext({})
const StepProvider = StepContext.Provider
const StepConsumer = StepContext.Consumer

function Step (props) {
  /**
   * Step gets context equivalent to the activeStep prop of the Steps component.
   * If the context is equal to the props.id, then we can add the 'is-active' class.
   */

  return (
    <StepConsumer>
      { context => {
        return (
          <li className={
            `steps-segment 
            ${context === props.id ? ' is-active' : ''}
            `}>
            <a href='#' className='steps-marker'>{props.marker}</a>
            { props.details &&
              <div className='steps-content'>{props.details}</div>
            }
          </li>
        )
      }}
    </StepConsumer>
  )
}

function Steps (props) {
  /**
   * Acts as the context provider for the active step.
   * value --> props.activeStep passed down as context
   */
  return (
    <StepProvider value={props.activeStep}>
      <ul className={`
        steps
        ${props.contentCentered ? ' has-content-centered' : ''}
        ${props.balanced ? ' is-balanced' : ''}
        ${props.thin ? ' is-thin' : ''}
        ${props.size ? ` is-${props.size}` : ''}
        ${props.hollow ? ' is-hollow' : ''}
        ${props.gaps ? ' has-gaps' : ''}
        ${props.dashed ? ' is-dashed' : ''}
        ${props.vertical ? ' is-vertical' : ''}
      `}>
        { props.children }
      </ul>
    </StepProvider>
  )
}

class App extends React.Component {
  /**
   * User is left to implement increment functions for steps
   * The Step component requires an id prop that should be
   * 'mappable' to the activeStep prop of the Steps component
   *
   * For example, if (when we increment), the activeStep goes from
   * 'step1' to 'step2', then the id(s) of the Step(s) should be
   * 'step1' and 'step2'.
   *
   * The user would then implement a function that updates the activeStep
   * state in the container and passes it to the Steps component as a props.
   */

  state = {
    activeStep: 1,
  }

  incrementStep = () => {
    let { activeStep } = this.state
    activeStep = activeStep + 1
    this.setState({ activeStep })
  }

  toggleActiveStep = () => {

  }

  render () {
    return (
      <div className='container'>
        <div style={{ 'marginTop': '3rem', 'marginBottom': '3rem' }}>
          <button className='button is-primary' onClick={this.incrementStep}>Next Step</button>
        </div>
        <section className='section'>
          <div className='is-size-4'>Hollow</div>
          <Steps hollow contentCentered activeStep={`step${this.state.activeStep}`}>
            <Step id={'step1'} marker={1} details={`Some details for step 1`} />
            <Step id={'step2'} marker={2} details={`Some details for step 2`} />
            <Step id={'step3'} marker={3} details={`Some details for step 3`} />
            <Step id={'step4'} marker={4} details={`Some details for step 4`} />
            <Step id={'step5'} marker={5} details={`Some details for step 5`} />
          </Steps>
        </section>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'))
