import React from 'react';
import { useRouter } from 'next/router'
import { useAppContext } from 'store/Context'
import Grid from '@material-ui/core/Grid';
import styles from 'styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  product: {
    maxWidth: '800px', 
    minWidth: '2800px'
  },
}));

export default function First() {
  const router = useRouter()
  const { userType } = useAppContext()
  const classes = useStyles();


  return (
      <>
         <br />
         <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

             </Grid>
    </>
  );
}
