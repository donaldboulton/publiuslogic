
import React from 'react'
import 'typeface-kaushan-script'
import 'typeface-roboto'

import { ThemeProvider } from './src/Context/theme-context'
import GlobalStyle from './src/components/GlobalStyle'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)