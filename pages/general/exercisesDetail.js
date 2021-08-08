import React, {useState} from 'react'
import { withRouter } from 'next/router'
import {Grid, TextField, FormControl   } from '@material-ui/core'
import { URL } from 'res/index'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_EXERCISE_BY_ID, GET_All_MUSCLES } from 'container/Querys'
import { makeStyles } from '@material-ui/core/styles'
import ExercisesForm from '@/components/forms/exercisesUpdate'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'


const useStyles = makeStyles((theme) => ({
  grids: {
      margin: 5,
      padding: 5
  }
}));


const Index = ({exercise, muscles, router}) => {
    const classes = useStyles();

return exercise && muscles &&  <ExercisesForm muscles={muscles} exercise={exercise}/>
  
}

Index.getInitialProps = async (ctx) => {
    const data = parseCookies(ctx.req)
    if(!data.user){
      if(typeof window === 'undefined'){
        ctx.res.writeHead(301, {location: '/'})
        ctx.res.end()
    } else {
    // On client
      Router.push('/')
    }
    }
    let exercise = {}
    let muscles = {}

    let bodyExercise =  { 
        query: GET_EXERCISE_BY_ID,
        variables: { idExececise: ctx.query?.id }
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