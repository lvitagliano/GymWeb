import 'styles/globals.css'
import React, { useEffect } from 'react';
import Head from 'next/head'
import Layout from 'components/Layout'
import { ThemeProvider } from '@material-ui/styles';
import theme from 'components/theme'
import { useRouter } from 'next/router'
import { AppContextProvider } from "store/Context";
import Cookies from 'js-cookie' 

const MyApp = ({ Component, pageProps, router}) => {  
   
  return (
    <>
      <Head>
        <title>New Olympic Gym</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </AppContextProvider>
      </ThemeProvider>
    </>
  )

}


export default MyApp
