import React, {useState, useContext} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useMutation } from '@apollo/client';
import { useAppContext } from 'store/Context';
import Cookies from 'js-cookie'
import { AUTH } from 'container/Mutation';
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Card, CardActions,CardContent,Button, Grid, FormControl,
IconButton, Input, InputLabel, InputAdornment} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { useRouter } from 'next/router'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 475,
        minHeight: 250,
        textAlign: '-webkit-center'
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

export default function Login() {
    const classes = useStyles();
    const { activeAuth, getCurrentUserFnc } = useAppContext();
    const router = useRouter()
    const [auth, { loading, error }] = useMutation(AUTH);
    const [errors, setErrors] = useState({
       label: 'Usuario o contraseña incorrecto',
       shoError: true
    })
    const [values, setValues] = useState({
        username: '',
      password: '',
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
    const onSubmits = (input) => {
        const variables = { identifier: input.username, password: input.password }
        const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL
        axios.post(`${AUTH_URL}/auth/login`,{
            ...variables
        },
        {
            headers:{'Content-Type': 'application/json'},
            withCredentials: true
        }).then((res)=>{
            getCurrentUserFnc()
        }).catch((error)=>{
            console.log(error)
            setErrors({
                ...errors,
                shoError: false
            })
            router.push('/')
        })
        /*auth({ variables }).then(({ data }) => {
            Cookies.remove('token');
           if (data.auth === null) {
              setErrors({
                 ...errors,
                 shoError: false
              })
           } else {
              setErrors({
                 ...errors,
                 shoError: true
              })
              const { auth } = data
              activeAuth()
              router.push('/')
           }
  
        }).catch(error => {
           console.log(error)
        })*/
     }

    return (
        <form disabled={loading} onSubmit={handleSubmit}>
        <Paper elevation={3} className={classes.root}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Grid>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="user">Usuario / Mail</InputLabel>
                            <Input
                            className={classes.title}
                            id="username"
                            name="username"
                            onChange={handleChange('username')}
                                endAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
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
                </CardContent>
                <CardActions>
                    <Grid
                        style={{ paddingLeft: 40, paddingRight: 30, paddingBottom: 30 }}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button type="submit" className={classes.title} fullWidth variant="contained"  color="primary">
                            Ingresar
                        </Button>
                        <span hidden={errors.shoError} style={{color: 'red'}}>{errors.label}</span>
                        <br />
                        <Link href="/account/register">
                            <Button size="medium" className={classes.subTitle}>Registrarse</Button>
                        </Link>
                        <Link href="/account/remember">
                            <Button size="medium" className={classes.subTitle}>Olvidó la contraseña?</Button>
                        </Link>
                    </Grid>
                </CardActions>
            </Card>
        </Paper>
        </form>
    );
}