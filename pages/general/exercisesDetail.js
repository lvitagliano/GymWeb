import React, {useState} from 'react'
import { withRouter } from 'next/router'
import {Grid, TextField, FormControl   } from '@material-ui/core'
import { URL } from 'res/index'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_EXERCISE_BY_ID, GET_All_MUSCLES } from 'container/Querys'
import { makeStyles } from '@material-ui/core/styles'
import ExercisesForm from '@/components/forms/exercisesUpdate'


const useStyles = makeStyles((theme) => ({
  grids: {
      margin: 5,
      padding: 5
  }
}));


const Index = ({exercise, muscles, router}) => {
    const classes = useStyles();

    console.log('exercise',exercise)
return exercise && muscles &&  <ExercisesForm muscles={muscles} exercise={exercise}/>
  
}

Index.getInitialProps = async (context, dos) => {
    let exercise = {}
    let muscles = {}

    let bodyExercise =  { 
        query: GET_EXERCISE_BY_ID,
        variables: { idExececise: context.query?.id }
    }

    let bodyMuscle = {
        query: GET_All_MUSCLES
    }
    await getAxios(bodyMuscle).then(resp => muscles = resp.data.data.getAllMuscles)
     await getAxios(bodyExercise).then(resp => exercise = resp.data.data.getExerciseById)

     

    return {
        exercise: exercise,
        muscles: muscles
    };
  }

  export default withRouter(Index)