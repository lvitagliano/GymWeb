import { useEffect } from "react"
import { useRouter } from "next/router"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Custom404() {
  const router = useRouter()
  const classes = useStyles();


  return <div className={classes.root}>
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" gutterBottom>
      Próximamente podrá acceder
      </Typography>
      <Button variant="contained" color="primary" onClick={() => router.push("/")}>
        Volver
      </Button>
    </Grid>

  </div>

}