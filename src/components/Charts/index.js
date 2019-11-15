import React from 'react'
import DashBoard from './dashboard'
import ChartScript from './chartScript'

const Charts = () => {
  return (
    <>
      <div className='container'>
        <DashBoard />
        <ChartScript />
        <div id='embed-api-auth-container' />
        <div id='view-selector-container' />
        <div id='main-chart-container' />
        <div id='breakdown-chart-container' />
      </div>
    </>
  )
}

export default Charts
