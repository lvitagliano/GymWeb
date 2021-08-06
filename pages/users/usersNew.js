import React, {useState} from 'react'
import { withRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import UsersCreate from '@/components/forms/usersCreate'

const useStyles = makeStyles((theme) => ({
  grids: {
      margin: 5,
      padding: 5
  }
}));


const Index = () => {
    const classes = useStyles();

return <UsersCreate />
  
}

export default withRouter(Index)