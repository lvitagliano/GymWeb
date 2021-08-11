import React, { useState, Fragment } from 'react'
import {
    Grid, TextField, FormControl, Typography, FormHelperText, InputAdornment ,IconButton , 
    NativeSelect, TextareaAutosize, Select, InputLabel, Button, Input
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { CREATE_USER } from 'container/Mutations'
import { getAxios } from 'hoc/simpleFunctions'
import { PROFILE, GENDER } from 'res/index'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    footer: {

    }
}));

const UsersCreate = () => {
    const classes = useStyles();
    const router = useRouter()

    const [state, setstate] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phone: '',
        nac: '',
        gender: '',
        profile: '',
        address: '',
        dni: '',
        weightStart: '',
        weightActual: '',
        showPassword: false,
        passwordConfirm: ''
    })

    const handleChange = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeSelect = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    function handleSwal() {
        Swal.fire({
            icon: 'success',
            title: 'Usuario creado',
            showCancelButton: true,
            cancelButtonText: `Cargar otro`,
            confirmButtonText: `Volver a lista`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/users/users')
            }
        })

    }

    const createUser = (estado) => {
        let InputUser = {
            email: estado?.email,
            firstName: estado?.firstName,
            lastName: estado?.lastName,
            phone: estado?.phone,
            nac: estado?.nac,
            gender: estado?.gender,
            password: estado?.password,
            profile: estado?.profile,
            address: estado?.address,
            dni: Number(estado?.dni),
            weightStart: Number(estado?.weightStart),
            weightActual: Number(estado?.weightActual)
        }
        console.log('createUser',InputUser)

     
        let body = {
            query: CREATE_USER,
            variables: { InputUser }
        }
        getAxios(body).then(resp => handleSwal())


    }

    const handleClickShowPassword = () => {
        setstate({ ...state, showPassword: !state.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (<div className={classes.root} >

        <Grid container style={{
            justifyContent: 'center',
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }} spacing={3}>
          <Grid item xs={12}><Typography variant="h2" component="h3" gutterBottom>
                Nuevo Usuario
            </Typography></Grid>  
            <Grid item xs={5}>
                <FormControl fullWidth >
                    <TextField
                        name="firstName"
                        style={{
                            width: '100%'
                        }}
                        value={state?.firstName}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        helperText="Nombre"
                        placeholder="Nombre"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={5}>
                <FormControl fullWidth >
                    <TextField
                        name="lastName"
                        style={{
                            width: '100%'
                        }}
                        value={state?.lastName}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Apellido"
                        helperText="Apellido"
                    />

                </FormControl>
            </Grid>   
            <Grid item xs={5}>
            <FormControl fullWidth className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
          <Input
            name='password'
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            aria-describedby="component-error-text"
            />
              { state.password !== state.passwordConfirm && <FormHelperText id="component-error-text">Las contraseñas deben coincidir</FormHelperText>}
        </FormControl>
        </Grid>
            <Grid item xs={5}>
            <FormControl fullWidth className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Confirmar contraseña</InputLabel>
          <Input
            name='passwordConfirm'
            type={state.showPassword ? 'text' : 'password'}
            value={state.passwordConfirm}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
                     { state.password !== state.passwordConfirm && <FormHelperText id="component-error-text">Las contraseñas deben coincidir</FormHelperText>}

        </FormControl>
        </Grid>
            <Grid item xs={5}>
                <FormControl fullWidth >
                    <TextField
                        name="email"
                        style={{
                            width: '100%'
                        }}
                        value={state?.email}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Email"
                        helperText="Email"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={5}>
                <FormControl fullWidth >
                    <TextField
                        name="dni"
                        style={{
                            width: '100%'
                        }}
                        value={state?.dni}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="DNI"
                        helperText="DNI"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={5}>
                <FormControl fullWidth >
                    <TextField
                        name="weightStart"
                        style={{
                            width: '100%'
                        }}
                        value={state?.weightStart}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Peso inicial"
                        helperText="Peso inicial"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={5}>
                <FormControl fullWidth >
                    <TextField
                        name="weightActual"
                        style={{
                            width: '100%'
                        }}
                        value={state?.weightActual}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Peso actual"
                        helperText="Peso actual"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={3}>
                <FormControl fullWidth >
                    <TextField
                        name="phone"
                        style={{
                            width: '100%'
                        }}
                        value={state?.phone}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Teléfono"
                        helperText="Teléfono"
                    />

                </FormControl>
            </Grid>

            <Grid item xs={7}>
                <FormControl fullWidth >
                    <TextField
                        name="address"
                        style={{
                            width: '100%'
                        }}
                        value={state?.address}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Dirección"
                        helperText="Dirección"
                    />

                </FormControl>
            </Grid>
            
            <Grid item xs={10} container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        name="gender"
                        placeholder='gender'
                        value={state.gender}
                        onChange={handleChangeSelect}
                    >
                        {
                            GENDER?.map((m) => (
                                <option key={m} value={m}>{m}</option >
                            ))
                        }
                    </NativeSelect>
                    <FormHelperText>Músculo involucrado</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        name="profile"
                        placeholder='profile'
                        value={state.profile}
                        onChange={handleChangeSelect}
                    >
                        {
                            PROFILE?.map((m) => (
                                <option key={m} value={m}>{m}</option >
                            ))
                        }
                    </NativeSelect>
                    <FormHelperText>Músculo involucrado</FormHelperText>
                </FormControl>
                <Button 
                disabled={
                    state.password !== state.passwordConfirm  
                    || state.password == '' 
                    || state.email == '' 
                    || state.firstName == '' 
                    || state.lastName == '' 
                    || state.phone == '' 
                    || state.profile == '' 
                }
                type='submit' variant="contained"
                    color="primary" 
                    onClick={() => createUser(state)}>
                    Guardar
                </Button>

            </Grid>
        </Grid>
    </div>
    )
}

export default UsersCreate



