import React, {useState} from 'react'
import { withRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import ExercisesForm from '@/components/forms/exercisesCreate'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_All_MUSCLES } from 'container/Querys'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'

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