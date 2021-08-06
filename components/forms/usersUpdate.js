import React, { useState, Fragment } from 'react'
import {
    Grid, TextField, FormControl, Typography, FormHelperText,
    NativeSelect, TextareaAutosize, Select, InputLabel, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { UPDATE_USER } from 'container/Mutations'
import { getAxios } from 'hoc/simpleFunctions'
import { PROFILE, GENDER } from 'res/index'


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

const UsersUpdate = ({ user }) => {
    const classes = useStyles();
    const router = useRouter()

    const [state, setstate] = useState({
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        phone: user?.phone,
        nac: user?.nac,
        gender: user?.gender,
        profile: user?.profile,
        weightStart: Number(user?.weightStart),
        weightActual: Number(user?.weightActual)
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
            title: 'Usuario modificado',
            showCancelButton: true,
            cancelButtonText: `Cargar otro`,
            confirmButtonText: `Volver a lista`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/users/users')
            }
        })

    }

    function createExercise(estado) {

        let InputUser = {
            email: estado?.email,
            firstName: estado?.firstName,
            lastName: estado?.lastName,
            phone: estado?.phone,
            nac: estado?.nac,
            gender: estado?.gender,
            profile: estado?.profile,
            weightStart: estado?.weightStart,
            weightActual: estado?.weightActual
        }

        let body = {
            query: UPDATE_USER,
            variables: { idUser:user._id, InputUser }
        }
        getAxios(body).then(resp => handleSwal())


    }
    return (<div className={classes.root} >

        <Grid container style={{
            justifyContent: 'center',
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }} spacing={3}>
          <Grid item xs={12}><Typography variant="h2" component="h3" gutterBottom>
                Modificar Usuario
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
                <Button //disabled={state.name == '' || state.description == '' || state.image == '' //|| state.muscle == '' }
                
                type='submit' variant="contained"
                    color="primary" onClick={() => createExercise(state)}>
                    Guardar
                </Button>

            </Grid>
        </Grid>
    </div>
    )
}

export default UsersUpdate



