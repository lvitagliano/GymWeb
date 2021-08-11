import React, { useState } from 'react'
import { withRouter } from 'next/router'
import { Grid, TextField, FormControl } from '@material-ui/core'
import { URL } from 'res/index'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_USER_BY_ID, GET_CONTACTFORM_BY_USER, GET_MEDICFORM_BY_USER, GET_COVIDFORM_BY_USER } from 'container/Querys'
import { makeStyles } from '@material-ui/core/styles'
import UsersUpdate from '@/components/forms/usersUpdate'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'


const useStyles = makeStyles((theme) => ({
  grids: {
    margin: 5,
    padding: 5
  }
}));


const Index = ({ user, contactForm, medicForm, covidForm, router }) => {
  const classes = useStyles();
 
  return user && <UsersUpdate user={user} contactForm={contactForm} medicForm={medicForm} covidForm={covidForm} />

}

Index.getInitialProps = async (ctx) => {
  const data = parseCookies(ctx.req)
  if (!data.user) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(301, { location: '/' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }

  let user = {}
  let contactForm = {}
  let covidForm = {}
  let medicForm = {}

  let body = {
    query: GET_USER_BY_ID,
    variables: { idUser: ctx.query?.id }
  }

  await getAxios(body).then(resp => user = resp.data.data.getUserById)

  let bodyContact = {
    query: GET_CONTACTFORM_BY_USER,
    variables: { idUser: ctx.query?.id }
  }
  let bodyMedic = {
    query: GET_MEDICFORM_BY_USER,
    variables: { idUser: ctx.query?.id }
  }
  let bodyCovid = {
    query: GET_COVIDFORM_BY_USER,
    variables: { idUser: ctx.query?.id }
  }

  await getAxios(bodyContact).then(resp => contactForm = resp.data.data.getContactFormByUser)
  await getAxios(bodyMedic).then(resp => medicForm = resp.data.data.getMedicFormByUser)
  await getAxios(bodyCovid).then(resp => covidForm = resp.data.data.getCovidFormByUser)


  return {
    user: user,
    contactForm: contactForm[0],
    medicForm: medicForm[0],
    covidForm: covidForm[0]
  };
}

export default withRouter(Index)