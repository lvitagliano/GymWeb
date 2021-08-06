import styles from 'styles/Home.module.css'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid'
import { Logo } from "components/Logo"
import { makeStyles } from '@material-ui/core/styles'
import Cookies from 'js-cookie' 
import { useAppContext } from 'store/Context'

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default function Home() {
  const router = useRouter()
  const classes = useStyles();
  const { isAuth = null } = useAppContext()

  const renderIndex = (auth) => {
    if(auth){
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
          renderIndex(isAuth)
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