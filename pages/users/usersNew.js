import React, {useState} from 'react'
import { withRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import UsersCreate from '@/components/forms/usersCreate'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'

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

Index.getInitialProps = async (ctx) => {
  const data = parseCookies(ctx.req)
if (data) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      if(typeof window === 'undefined'){
        ctx.res.writeHead(302, {location: '/login'})
        ctx.res.end()
    } else {
    // On client
      Router.push('/login')
    }
    }
  }

  return {
    data: data && data,
  }
}

export default withRouter(Index)