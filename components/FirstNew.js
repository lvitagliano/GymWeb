import React from 'react';
import { useRouter } from 'next/router'
import { useAppContext } from 'store/Context'
import Grid from '@material-ui/core/Grid';
import styles from 'styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { getAxios } from '@/hoc/simpleFunctions'
import { GET_CONTACTFORM_BY_USER, GET_MEDICFORM_BY_USER, GET_COVIDFORM_BY_USER } from '@/container/Querys'

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

  let bodyContact = {
    query: GET_CONTACTFORM_BY_USER,
    variables: { idUser: "60f6f6db85cb73be3b4db6e0" }
}


    console.log('bodyContact',bodyContact)
getAxios(bodyContact).then(resp => console.log(resp))

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
