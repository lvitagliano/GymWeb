import React, { useState, useEffect } from 'react'
import styles from 'styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import { Logo } from "components/Logo"
import { makeStyles } from '@material-ui/core/styles'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'
import Login from 'components/account/login'
import { useAppContext } from 'store/Context'
import FirstNew from 'components/FirstNew'

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const Index = ({data}) => {
  const classes = useStyles();
  const {setIsAuth,isAuth} = useAppContext();
  useEffect(() => {
    setIsAuth(data.user ? true : false)
  }, [data])
  console.log('data', data.user)


  const renderIndex = (auth) => {
    if(auth){
      return <>
         <h1 className={styles.title}>
      <a >New Olympic Gym</a>
    </h1>
    <FirstNew />
    <br />
    {/* <First /> */}
    </>
    }else{
      return <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
  >
      <Grid style={{marginBottom: 30 }}><Logo url={'/'}/></Grid>
      <Login />
    </Grid>
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {
          renderIndex(data.user)
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Woff Tecnology
          <img src="favicon.png" alt="WFF ST" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
  const data = parseCookies(ctx.req)

  return {
    data: data && data,
  }
}

export default Index