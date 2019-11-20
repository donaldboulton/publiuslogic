import { useLocalStorage } from './useLocalStorage'
import { useMediaQuery } from './useMediaQuery'

export const useDarkMode = (initialValue = `noPreference`) => {
  const [colorMode, setColorMode] = useLocalStorage(`colorMode`, initialValue)
  const setter = value => {

    document.body.style.transition = `color 0.5s, background 0.5s`
    setColorMode(value)
  }

  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`)
  const darkModeEnabled = colorMode === `dark` || prefersDarkMode
  return [darkModeEnabled, colorMode, setter]
}
