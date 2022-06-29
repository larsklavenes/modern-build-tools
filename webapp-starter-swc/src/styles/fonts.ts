/* eslint-disable import/order */
// Basic recommended custom font import setup
// Consider using base64 strings if only using ~1-3 fonts

// .woff2 - No IE support
import proximaNovaBoldWoff2 from 'src/assets/fonts/proximaNovaBold.woff2'
import proximaNovaLightWoff2 from 'src/assets/fonts/proximaNovaLight.woff2'
import proximaNovaRegularWoff2 from 'src/assets/fonts/proximaNovaRegular.woff2'
import proximaNovaRegularItalicWoff2 from 'src/assets/fonts/proximaNovaRegularItalic.woff2'
import proximaNovaSemiboldWoff2 from 'src/assets/fonts/proximaNovaSemibold.woff2'

// .woff - Full support, remove if not supporting <= IE 11
import proximaNovaBoldWoff from 'src/assets/fonts/proximaNovaBold.woff'
import proximaNovaLightWoff from 'src/assets/fonts/proximaNovaLight.woff'
import proximaNovaRegularItalicWoff from 'src/assets/fonts/proximaNovaRegularItalic.woff'
import proximaNovaRegularWoff from 'src/assets/fonts/proximaNovaRegular.woff'
import proximaNovaSemiboldWoff from 'src/assets/fonts/proximaNovaSemibold.woff'

export const fontFamily = 'ProximaNova'

const fontBaseProp = `
  font-family: '${fontFamily}';
  font-display: swap;
`

export const proximaNovaLight = `
  @font-face {
    ${fontBaseProp}
    font-style: normal;
    font-weight: 300;
    src: url(${proximaNovaLightWoff}) format('woff'), url(${proximaNovaLightWoff2}) format('woff2');
  }
`

export const proximaNovaRegular = `
  @font-face {
    ${fontBaseProp}
    font-style: normal;
    font-weight: 400;
    src: url(${proximaNovaRegularWoff}) format('woff'), url(${proximaNovaRegularWoff2}) format('woff2');
  }
`

export const proximaNovaRegularItalic = `
  @font-face {
    ${fontBaseProp}
    font-style: italic;
    font-weight: 400;
    src: url(${proximaNovaRegularItalicWoff}) format('woff'), url(${proximaNovaRegularItalicWoff2}) format('woff2');
  }
`

export const proximaNovaSemibold = ` 
  @font-face {
    ${fontBaseProp}
    font-style: normal;
    font-weight: 500;
    src: url(${proximaNovaSemiboldWoff}) format('woff'), url(${proximaNovaSemiboldWoff2}) format('woff2');
  }
`

export const proximaNovaBold = `
  @font-face {
    ${fontBaseProp}
    font-style: normal;
    font-weight: 700;
    src: url(${proximaNovaBoldWoff}) format('woff'), url(${proximaNovaBoldWoff2}) format('woff2');
  }
`
