import React, {useState, useContext} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useMutation } from '@apollo/client';
import { useAppContext } from 'store/Context';
import Cookies from 'js-cookie'
import { CREATE_USER } from 'container/Mutations';
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Card, CardActions,CardContent,Button, Grid, FormControl,
IconButton, Input, InputLabel, InputAdornment} from '@material-ui/core'
import {Visibility, VisibilityOff, AccountCircle} 
from '@material-ui/icons'
import { useRouter } from 'next/router'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 475,
        minHeight: 250,
        textAlign: '-webkit-center',
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    margin: {
        margin: theme.spacing(1),

    },
    cardContent: {
        padding: '50px'
    }

}));

export default function Register() {
    const classes = useStyles();
    const router = useRouter()
    const [create_user, { loading, error, }] = useMutation(CREATEUSER);
    const [errors, setErrors] = useState({
       label: 'Usuario o contraseña incorrecto',
       shoError: true
    })
    const [values, setValues] = useState({
        identifier: '',
        password: '',
        passwordtwo: '',
        email: '',
        firstName: '',
        lastName: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmits(values)
  
     }
    const onSubmits = ({ identifier, password, email, firstName, lastName }) => {
        const URL = process.env.NEXT_PUBLIC_AUTH_URL
        
        axios.post(`${URL}/users`,{
            username: identifier,
            password,
            email,
            name: firstName,
            lastname: lastName,
        },{
            headers:{'Content-Type':'application/json'},
        }).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
        /* const variables = {
            "input": {
              "identifier": "sccasascas", 
              "password": "wewe", 
              "email": "lukasvitagli@gmail.com", 
              "firstName": "Lukas",
              "lastName": "Lukas",
              "type": "user"
            }
        } */
        //create_user({ variables })
        // .then(({ data }) => {
        //     console.log('input',data)
        // }).catch(error => {
        //    console.log(error)
        // })
     }

    return (
        <form disabled={loading} onSubmit={handleSubmit}>
        <Paper elevation={3} className={classes.root}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Grid>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="user">Usuario</InputLabel>
                            <Input
                            className={classes.title}
                            id="identifier"
                            name="identifier"
                            onChange={handleChange('identifier')}
                                endAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="user">Nombre</InputLabel>
                            <Input
                            className={classes.title}
                            id="firstName"
                            name="firstName"
                            onChange={handleChange('firstName')}
                                endAdornment={
                                    <InputAdornment position="start">
                                        <TextFormatIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>          
                    <Grid>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="user">Apellido</InputLabel>
                            <Input
                            className={classes.title}
                            id="lastName"
                            name="lastName"
                            onChange={handleChange('lastName')}
                                endAdornment={
                                    <InputAdornment position="start">
                                        <TextFormatIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                            className={classes.title}
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange('email')}
                                endAdornment={
                                    <InputAdornment position="start">
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>  
                    <Grid>
                        <FormControl fullWidth className={clsx(classes.margin)}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input className={classes.title}
                                id="password"
                                name="password"
                                error={values.passwordtwo !== values.password}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="visibilidad"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid>
                        <FormControl fullWidth className={clsx(classes.margin)}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input className={classes.title}
                                id="passwordtwo"
                                name="passwordtwo"
                                error={values.passwordtwo !== values.password}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.passwordtwo}
                                onChange={handleChange('passwordtwo')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="visibilidad"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid style={{ display: values.passwordtwo !== values.password ? 'block' : 'none' }}>
                        <span>Las contraseñas deben coincidir</span>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid
                        style={{ paddingLeft: 40, paddingRight: 30, paddingBottom: 30 }}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button disabled={values.passwordtwo !== values.password}
                        type="submit" className={classes.title} fullWidth variant="contained"  color="primary">
                            Registrarse
                        </Button>
                        <br />
                        <Link href="/">
                            <Button size="medium" className={classes.subTitle}>Ya tengo usuario</Button>
                        </Link>
                    </Grid>
                </CardActions>
            </Card>
        </Paper>
        </form>
    );
}