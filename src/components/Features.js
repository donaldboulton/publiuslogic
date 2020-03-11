import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Grid } from '../styles/Grid'

const FeatureGrid = ({ gridItems }) => (
  <Grid minWidth='25em' align='center'>
    {gridItems.map(item => (
      <div key={item.text} className='column is-6'>
        <section className='section'>
          <div className='has-text-centered'>
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </Grid>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
}

export default FeatureGrid
