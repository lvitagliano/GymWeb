import styles from 'styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import { Logo } from "components/Logo"
import { makeStyles } from '@material-ui/core/styles'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const Index = ({data}) => {
  const classes = useStyles();

  const renderIndex = (auth) => {
    if(!auth){
      return <>
      <h1 className={styles.title}>
      <a >New Olympic Gym</a>
    </h1>
 
    </>
    }else{
      return <Grid
      className={classes.root}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
  >
      <Grid style={{marginBottom: 30 }}><Logo url={'/'}/></Grid>
    </Grid>
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {
          renderIndex()
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
if (data) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      if(typeof window === 'undefined'){
        ctx.res.writeHead(302, {location: '/login'})
        ctx.res.end()
    } else {
    // On client
      Router.push('/login')
    }
    }
  }

  return {
    data: data && data,
  }
}

export default Index