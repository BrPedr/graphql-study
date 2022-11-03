import { createGlobalStyle } from './styled-components'

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, ul, li,
  b, u, i, center,
  dl, dt, dd, ol,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

*,
*::after,
*::before {
    margin: 0;
    padding: 0;    
    outline: 0;    
    box-sizing: border-box;    
    font-family: 'Source Sans Pro', sans-serif;
}

html, body, #root {
    min-width: 100%;
    min-height: 100%;    
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
   display: block;
}

body {
    -webkit-font-smoothin: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    
    a, button, input {
        border: 0;
        outline: 0;        
        text-decoration: none;
    }
    
    a {
        color: black;
    }

    a, button {
    cursor: pointer;
    }
    
    ul, li  {
        list-style: none;
    }
}
`
