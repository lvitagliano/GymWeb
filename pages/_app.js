import 'styles/globals.css'
import React from 'react';
import Head from 'next/head'
import Layout from 'components/Layout'
import { ThemeProvider } from '@material-ui/styles';
import theme from 'components/theme'
import { AppContextProvider } from "store/Context";
import { CookiesProvider } from "react-cookie"

const MyApp = ({ Component, pageProps, router}) => {  
   
  return (
    <>
      <Head>
        <title>New Olympic Gym</title>
      </Head>
      <ThemeProvider theme={theme}>
      <CookiesProvider>
        <AppContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </AppContextProvider>
        </CookiesProvider>
      </ThemeProvider>
    </>
  )

}


export default MyApp
