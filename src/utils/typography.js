import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'
oceanBeachTheme.baseFontSize = '20px'

oceanBeachTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    baseFontSize: 1,
    minFontSize: 0.9,
    maxFontSize: 1.2,
    minLineHeight: 1.5,
    maxLineHeight: 1.8,
  }
}

const typography = new Typography(oceanBeachTheme)

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
