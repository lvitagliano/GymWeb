import React, {useState} from 'react'
import { withRouter } from 'next/router'
import {Grid, TextField, FormControl   } from '@material-ui/core'
import { URL } from 'res/index'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_USER_BY_ID } from 'container/Querys'
import { makeStyles } from '@material-ui/core/styles'
import UsersUpdate from '@/components/forms/usersUpdate'


const useStyles = makeStyles((theme) => ({
  grids: {
      margin: 5,
      padding: 5
  }
}));


const Index = ({user, router}) => {
    const classes = useStyles();

return user &&  <UsersUpdate user={user} />
  
}

Index.getInitialProps = async (context) => {
    let user = {}

    let body =  { 
        query: GET_USER_BY_ID,
        variables: { idUser: context.query?.id }
    }

     await getAxios(body).then(resp => user = resp.data.data.getUserById)

     

    return {
        user: user
    };
  }

  export default withRouter(Index)