import React from 'react'
import NextApp from 'next/app'

import theme from '../utils/theme'
import { ThemeProvider } from 'theme-ui'

import 'essential-slices/src/components/Slider/slick.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}