import React, { useState, Fragment } from 'react'
import {
    Grid, TextField, FormControl, Typography, FormHelperText,
    NativeSelect, TextareaAutosize, Select, InputLabel, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { CREATE_EXERCISES } from 'container/Mutations'
import { getAxios } from 'hoc/simpleFunctions'
import { useAppContext } from 'store/Context'
import { middleWareRoutes } from 'hoc/simpleFunctions'


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

const ExercisesForm = ({ muscles }) => {
    const classes = useStyles();
    const router = useRouter()
    const { isAuth } = useAppContext()

    const [state, setstate] = useState({
        name: '',
        description: '',
        image: '',
        muscle: ''
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
            title: 'Ejercicio creado',
            showCancelButton: true,
            cancelButtonText: `Cargar otro`,
            confirmButtonText: `Volver a lista`,
        }).then((result) => {
            if (result.isConfirmed) {
                middleWareRoutes(router, '/general/exercises')
            }
        })

    }
    function createExercise(estado) {
        let musculo = muscles.filter((i) => i.description === state.muscle)

        let InputExercise = {
            name: estado.name,
            description: estado.description,
            image: estado.image,
            muscle: [musculo[0]?._id]
        }

        let body = {
            query: CREATE_EXERCISES,
            variables: { InputExercise }
        }
        getAxios(body).then(resp => handleSwal())


    }
    return (<Fragment className={classes.root} >

        <Grid container style={{
            justifyContent: 'center',
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }} spacing={3}>
                      <Grid item xs={12}>
            <Typography variant="h2" component="h3" gutterBottom>
                Nuevo Ejercicio
            </Typography>
            </Grid>
            <Grid item xs={8}>
                <FormControl fullWidth >
                    <TextField
                        name="name"
                        style={{
                            width: '100%'
                        }}

                        value={state?.name}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        helperText="Nombre del ejercicio"
                        placeholder="Nombre del ejercicio"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={8}>
                <FormControl fullWidth >
                    <TextField
                        name="image"
                        style={{
                            width: '100%'
                        }}
                        value={state?.image}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Imágen del ejercicio"
                        helperText="Imágen del ejercicio"
                    />

                </FormControl>
            </Grid>
            <Grid item xs={8}>
                <FormControl fullWidth >
                    <TextareaAutosize
                        name="description"
                        onChange={handleChange}
                        helperText="Nombre del ejercicio"
                        aria-label="Descripción del ejercicio"
                        rowsMin={3}
                        fullWidth
                        placeholder="Descripción del ejercicio"
                        value={state?.description}
                    />

                </FormControl>
            </Grid>
            <Grid item xs={8} container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        name="muscle"
                        placeholder='musculo'
                        value={state.muscle}
                        onChange={handleChangeSelect}
                    >
                        {
                            muscles?.map((m) => (
                                <option key={m._id} value={m.description}>{m.description}</option >
                            ))
                        }
                    </NativeSelect>
                    <FormHelperText>Músculo involucrado</FormHelperText>
                </FormControl>
                <Button disabled={state.name == '' || state.description == '' || state.image == '' //|| state.muscle == ''
                } 
                type='submit' variant="contained"
                    color="primary" onClick={() => createExercise(state)}>
                    Guardar
                </Button>

            </Grid>
        </Grid>
    </Fragment>
    )
}

export default ExercisesForm

