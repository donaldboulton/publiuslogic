import Typography from 'typography'
import {
  COVER_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const options = {
  baseFontSize: `18px`,
  baseLineHeight: 1.2,
  blockMarginBottom: 0.75,
  scaleRatio: 2.15,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'h1,h2,h3,h4': {
        lineHeight: 1.2,
      },
      [COVER_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${(17 / 16) * 100}%`,
        },
      },
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${(17 / 16) * 100}%`,
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${(16 / 16) * 100}%`,
        },
      },
    }
  },
}

const typography = new Typography(options)

export default typography
