import React, { useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {TextField, Grid} from '@mui/material';


function LoginPage() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    user:'',
    pass:''
  })

const handleChange = (e) => {
  setCredentials({
    ...credentials, [e.target.name]: e.target.value
  })
}


const handleSubmit = async (e) => {
  e.preventDefault()
  await axios.post('/api/auth/login', credentials).then(res => {
    if(res.status === 200){
      router.push('/')
    }else{
      console.log('error')
    }
  })
}

  return (
            <form onSubmit={handleSubmit}  style={{ textAlign: '-webkit-center' }}>
      <Card elevation={3}   sx={{ maxWidth: 545, textAlign: '-webkit-center' }}>
      <CardMedia
        component="img"
        height="200"
        image="/images/headimage.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ textAlign: '-webkit-center' }}>
      <Grid container spacing={2}  >
  <Grid item sx={{width:'80%'}} xs={12}>
  <TextField id="user" name='user' label="Usuario" variant="outlined" onChange={handleChange} />
  </Grid>
  <Grid item sx={{width:'90%'}} xs={12}>
  <TextField id="password" type='password' name='password' label="Password" variant="outlined" onChange={handleChange} />
  </Grid>
</Grid>
      </CardContent>
      <CardContent>
            <Button type='submit' variant="contained">Ingresar</Button>
      </CardContent>
    </Card>
      </form>
  )
}

export default LoginPage