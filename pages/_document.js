import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  render() {
    
    return (
      
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const materialSheets = new ServerStyleSheets()
  const styledComponentsSheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = async () => {
    const document = originalRenderPage({
      enhanceApp: App => props => materialSheets.collect(
        styledComponentsSheet.collectStyles(<App {...props} />)
        )
    })

    return document
  }

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: (
      <>
       {initialProps.styles}
        {materialSheets.getStyleElement()}
        {styledComponentsSheet.getStyleElement()}
      </>
    ),
  }
}

export default MyDocument
