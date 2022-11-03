import { DefaultTheme } from 'styled-components'

export interface StyleTheme extends DefaultTheme {
  breakpoints: { [key in keyof typeof breakpoints]: string }
  colors: { [key in keyof typeof colors]: string }
  fontWeights: { [key in keyof typeof fontWeights]: number }
  mixins: {
    calcRem: (pixelValue: number) => string
    getSpacing: (increment: number | number[]) => string
  }
  zLayers: { [key in keyof typeof zLayers]: number }
}

const BASE_SPACING = 8

const breakpoints = {
  smallDevices: '@media screen and (min-width: 370px)',
  desktop: '@media screen and (min-width: 960px)'
}

const colors = {
  // Generic
  black: '#000000',
  white: '#ffffff',

  //Warm greys
  warmGrey1: '#f8f8f8',

  //Greys
  grey1: '#979797'
}

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
}

const mixins = {
  /**
   * Converts a given number into the corresponding rem value
   * @param pixelValue - number value to convert to rem
   * @returns {string} - REM value
   */
  calcRem: (pixelValue: number): string => `${pixelValue / 16}rem`,
  /**
   * Util for using consistent spacing using our 8px base spacing value
   * @param increment - defines multiple of spacing
   * @returns {string} - spacing as a pixel value
   */
  getSpacing: (increment: number | number[]): string => {
    if (!Array.isArray(increment)) return `${increment * BASE_SPACING}px`

    let spacingValues = ''
    increment.forEach(
      (value) => (spacingValues += `${value * BASE_SPACING}px `)
    )
    return spacingValues
  }
}

const zLayers = {
  modal: 999
}

export const theme: StyleTheme = {
  breakpoints,
  colors,
  fontWeights,
  mixins,
  zLayers
}
