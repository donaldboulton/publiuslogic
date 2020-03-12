import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
oceanBeachTheme.baseFontSize = '24px'

oceanBeachTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    baseFontSize: 1,
    minFontSize: 0.9,
    maxFontSize: 1.2,
    minLineHeight: 1.7,
    maxLineHeight: 1.9,
  }
}

const typography = new Typography(oceanBeachTheme)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
