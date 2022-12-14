import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { StyleTheme } from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as unknown as ThemedStyledComponentsModule<StyleTheme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
