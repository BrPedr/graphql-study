import * as React from 'react'
import 'styled-components'

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass
}


declare global {
  interface Window { dataLayer: any[] }
}