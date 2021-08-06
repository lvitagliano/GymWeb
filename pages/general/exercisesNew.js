import React, {useState} from 'react'
import { withRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import ExercisesForm from '@/components/forms/exercisesCreate'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_All_MUSCLES } from 'container/Querys'

const useStyles = makeStyles((theme) => ({
  grids: {
      margin: 5,
      padding: 5
  }
}));


const Index = ({ muscles }) => {
    const classes = useStyles();

return muscles && <ExercisesForm muscles={muscles}/>
  
}

Index.getInitialProps = async (context, dos) => {
  let muscles = {}
  let body = {
      query: GET_All_MUSCLES
  }
  await getAxios(body).then(resp => muscles = resp.data.data.getAllMuscles)

  return {
    muscles: muscles
  };
}

export default withRouter(Index)