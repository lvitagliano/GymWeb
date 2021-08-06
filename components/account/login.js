import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useAppContext } from 'store/Context';
import Cookies from 'js-cookie'
import { AUTH } from 'container/Mutations';
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Card, CardActions,CardContent,Button, Grid, FormControl,
IconButton, Input, InputLabel, InputAdornment} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { useRouter } from 'next/router'
import axios from 'axios'
import { URL } from 'res/index'
import { middleWareRoutes } from 'hoc/simpleFunctions'


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
    const { getCurrentUserFnc, isAuth , setIsAuth } = useAppContext();
    const router = useRouter()

    const [error, seterror] = useState({
        error: '',
        state: true
    })
    const [values, setValues] = useState({
        email: '',
        password: '',
      showPassword: false,
    })

    useEffect(() => {
        if(isAuth.autorization){
            router.push('/')
          }else{
            router.push('/login')
          }
    }, [])


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
   
    const loginFunc = async (estado) => {
            let body = {
                query: AUTH,
                variables: { email: estado.email, password: estado.password }
            }

            axios.post(URL, body)
            .then(res => {
                if(res.data.errors){
                        seterror({
                            ...error,
                            state: false,
                            error: res.data.errors[0].message
                        })
                        setIsAuth({
                            ...isAuth,
                            autorization: false,
                        })
                }else{
                    getCurrentUserFnc()  
                    seterror({
                        ...error,
                        state: true,
                    })
                    Cookies.set('token', res.data.data.auth)
                    router.push('/')          
                }
                
            }, (error) => {
                errorManager(error)
            })
    }

    return (
   
        <Paper elevation={3} className={classes.root}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Grid>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="user">Email</InputLabel>
                            <Input
                            className={classes.title}
                            id="email"
                            name="email"
                            onChange={handleChange('email')}
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
                        <Button type="submit" className={classes.title} fullWidth variant="contained"  color="primary"
                        onClick={() => loginFunc(values)}
                        >
                            Ingresar
                        </Button>
                        <span hidden={error.state} style={{color: 'red'}}>{error.error}</span>
                        <br />
                        {/* <Link href="/account/register">
                            <Button size="medium" className={classes.subTitle}>Registrarse</Button>
                        </Link>
                        <Link href="/account/remember">
                            <Button size="medium" className={classes.subTitle}>Olvidó la contraseña?</Button>
                        </Link> */}
                    </Grid>
                </CardActions>
            </Card>
        </Paper>
     
    );
}