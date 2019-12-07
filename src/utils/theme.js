export const colors = {
  blue: `#00a396`,
  darkBlue: `#190c65`,
  darkerBlue: `#150956`,
  darkestBlue: `#0f073b`,
  lightBlue: `#00c2b2`,
  lighterBlue: `#279AF1`,
  lightestBlue: `#83aaff`,

  green: `#3f7912`,
  darkGreen: `#0c511a`,
  lightGreen: `#00d69b`,
  paleDarkGreen: `#104F55`,

  yellow: `#f9ff00`,
  darkYellow: `#d0d500`,
  lightYellow: `#fbff6c`,

  orange: `#dd581f`,
  darkOrange: `#d64000`,
  burntOrange: `#da1b60`,
  lightOrange: `#e57342`,

  gray: `#464849`,
  darkGray: `#3d3d3d`,
  darkerGray: `#1a1d23`,
  darkestGray: `#060606`,
  lightGray: `#bcbcbc`,
  lighterGray: `#e5e5e5`,
  lightestGray: `#f7f7f7`,

  noBack: `transparent`,
  darkBg: `#1d1d1d`,
  lightBg: `#ffffff`,
}

export const measures = {
  maxWidth: `40em`,

  smallBorder: `0.1em`,
  mediumBorder: `0.15em`,
  largeBorder: `0.2em`,

  smallBorderRadius: `0.2em`,
  mediumBorderRadius: `0.5em`,
  largeBorderRadius: `1em`,

  shortTrans: `0.3s`,
  mediumTrans: `0.6s`,
  longTrans: `1s`,
}

export const theme = { ...colors, ...measures }

export const lightTheme = {
  background: `lightBG`,
  textColor: `black`,
  quoteBg: theme.lightestGray,

  links: theme.blue,
  hoveredLinks: theme.lightBlue,

  shadowColor: theme.lighterGray,
  borderColor: theme.lighterGray,

  headerBg: theme.darkerBlue,
  footerBg: theme.darkerGray,

  buttonBg: theme.blue,
  hoveredButtonBg: theme.lightBlue,
  grayButtonBg: theme.lightestGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: theme.lighterGray,
}

export const darkTheme = {
  background: theme.darkBG,
  textColor: theme.lighterGray,
  quoteBg: theme.darkestGray,

  links: theme.darkOrange,
  hoveredLinks: theme.burntOrange,

  shadowColor: `black`,
  borderColor: `black`,

  headerBg: theme.darkestBlue,
  footerBg: theme.darkestGray,

  buttonBg: theme.darkGreen,
  hoveredButtonBg: theme.green,
  grayButtonBg: theme.darkGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: theme.darkestGray,
}

export default darkMode =>
  darkMode ? { ...theme, ...darkTheme } : { ...theme, ...lightTheme }
