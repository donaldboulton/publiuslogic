export const colors = {
  blue: `#00a396`,
  darkBlue: `#190c65`,
  darkerBlue: `#150956`,
  darkestBlue: `#0f073b`,
  lightBlue: `#00c2b2`,
  lighterBlue: `#028f83`,
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
  darkerOrange: `#da1b60`,
  burntOrange: `#da1b60`,
  lightOrange: `#e57342`,

  gray: `#464849`,
  darkGray: `#3d3d3d`,
  darkerGray: `#1a1d23`,
  darkestGray: `#1d1d1d`,
  lightGray: `#bcbcbc`,
  lighterGray: `#e5e5e5`,
  lightestGray: `#f7f7f7`,

  noBack: `transparent`,
  darkBg: `#1d1d1d`,
  lightBg: `#ffffff`,
}

export const measures = {
  maxWidth: `50em`,

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
  background: theme.lightBg,
  accentBackground: theme.lightBlue,
  textColor: theme.darkestGray,
  quoteBg: theme.lightestGray,

  links: theme.darkOrange,
  hoveredLinks: theme.burntOrange,
  activeLinks: theme.lightOrange,

  shadowColor: theme.lighterGray,
  borderColor: theme.lightBlue,

  headerBg: theme.darkerBlue,
  footerBg: theme.lightBlue,

  buttonBg: theme.blue,
  hoveredButtonBg: theme.lightBlue,
  grayButtonBg: theme.lightestGray,
  grayHoveredButtonBg: theme.orange,
  inlineCodeColor: theme.lighterGray,
}

export const darkTheme = {
  background: theme.darkBG,
  accentBackground: theme.darkestGray,
  textColor: theme.lighterGray,
  quoteBg: theme.darkestGray,

  links: theme.darkOrange,
  hoveredLinks: theme.burntOrange,
  activeLinks: theme.lightOrange,

  shadowColor: theme.darkestGray,
  borderColor: theme.darkOrange,

  headerBg: theme.darkestGray,
  footerBg: theme.darkestGray,

  buttonBg: theme.darkGreen,
  hoveredButtonBg: theme.green,
  grayButtonBg: theme.darkGray,
  grayHoveredButtonBg: theme.orange,
  inlineCodeColor: theme.darkestGray,
}

export default darkMode =>
  darkMode ? { ...theme, ...darkTheme } : { ...theme, ...lightTheme }
