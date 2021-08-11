import React, { useState, Fragment, useEffect } from 'react'
import {
    Grid, TextField, FormControl, Typography, FormHelperText, AccordionDetails, Accordion,
    NativeSelect, TextareaAutosize, Select, InputLabel, Button, AccordionSummary
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { UPDATE_USER } from 'container/Mutations'
import { getAxios } from 'hoc/simpleFunctions'
import { PROFILE, GENDER, MEDICS } from 'res/index'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root2: {
        flexGrow: 1,
        width: '80%',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    GridLabel: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    TypographyLbl: {
        margin: 5
    }
}));

const UsersUpdate = ({ user, contactForm, medicForm, covidForm, }) => {
    const classes = useStyles();
    const router = useRouter()

    const [expanded, setExpanded] = React.useState(false);

    const handleChangePanel = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
            variables: { idUser: user._id, InputUser }
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
            <Grid item xs={10}>
                <Accordion expanded={expanded === 'panel1'} onChange={contactForm && handleChangePanel('panel1')}>
                    <AccordionSummary
                        expandIcon={contactForm && <ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>FORMULARIO DE CONTACTO</Typography>
                        {!contactForm && <Typography className={classes.secondaryHeading}>No se encuentra cargado</Typography>}
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid container className={{
                            flexDirection: 'column', justifyContent: 'center',
                            textAlign: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }} spacing={3}>
                            <Grid container className={classes.GridLabel}>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>Nombre de contacto 1 : </Typography></Grid>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>{contactForm?.completeName}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>Tel. de contacto 1 : </Typography></Grid>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>{contactForm?.phone}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>Nombre de contacto 2 : </Typography></Grid>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>{contactForm?.completeNameTwo}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>Tel. de contacto 2 : </Typography></Grid>
                                <Grid className={classes.GridOtra}>
                                    <Typography className={classes.TypographyLbl}>{contactForm?.phoneTwo}</Typography></Grid>
                            </Grid>
                        </Grid>

                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={medicForm && handleChangePanel('panel2')}>
                    <AccordionSummary
                        expandIcon={medicForm && <ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>FORMULARIO MÉDICO</Typography>
                        {!medicForm && <Typography className={classes.secondaryHeading}>No se encuentra cargado</Typography>}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container className={{
                            flexDirection: 'column', justifyContent: 'center',
                            textAlign: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }} spacing={3}>
                            {
                                medicForm && MEDICS.map((item, i) => (
                                    <Grid key={i} container className={classes.GridLabel}>
                                        <Grid><Typography className={classes.TypographyLbl}>{item.label}: </Typography></Grid>
                                        <Grid><Typography className={classes.TypographyLblR}>{medicForm[item.value] === 0 ? 'No' : 'Si'}</Typography></Grid>
                                    </Grid>
                                ))
                            }
                            <Grid container className={classes.GridLabel}>
                                <Grid><Typography className={classes.TypographyLbl}>Presión</Typography></Grid>
                                <Grid><Typography className={classes.TypographyLblR}>{medicForm?.presion}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid><Typography className={classes.TypographyLbl}>Descripción</Typography></Grid>
                                <Grid><Typography className={classes.TypographyLblR}>{medicForm?.descripcionIfSi}</Typography></Grid>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={covidForm && handleChangePanel('panel3')}>
                    <AccordionSummary
                        expandIcon={covidForm && <ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>FORMULARIO COVID</Typography>
                        {!covidForm && <Typography className={classes.secondaryHeading}>No se encuentra cargado</Typography>}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container className={{
                            flexDirection: 'column', justifyContent: 'center',
                            textAlign: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }} spacing={3}>
                            <Grid container className={classes.GridLabel}>
                                <Grid><Typography className={classes.TypographyLbl}> Declaró Bajo Juramento que NO HE MANIFESTADO síntomas compatibles
                                    con covid-19 Y ninguno de mi grupo familiar más cercano a saber: tos, fiebre, dolor de garganta,
                                    dolor de cabeza, dolor muscular, dificultad respiratoria, falta de aire, pérdida repentina del gusto,
                                    pérdida repentina del olfato.</Typography></Grid>
                                <Grid ><Typography className={classes.TypographyLbl}>{covidForm?.sintomas === 0 ? 'No' : 'Si'}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid><Typography className={classes.TypographyLbl}>Declaró Bajo Juramento que NO MANIFIESTO enfermedades cómo inmunodepresivo, inmunocompetentes, que he tenido o tengo cáncer, etapa de diálisis, enfermedades renales, enfermedades hepáticas, enfermedades respiratorias, enfermedades cardiovasculares,
                                    hepatitis, en espera de trasplante o transplantado, diabético, embarazada.</Typography></Grid>
                                <Grid><Typography className={classes.TypographyLblR}>{covidForm?.inmunodepre === 0 ? 'No' : 'Si'}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid><Typography className={classes.TypographyLbl}>Declaro Bajo Juramento que ante la primera sospecha de padecer alguno/s de los síntomas o en mi grupo familiar, compatible con covid-19 asumo la obligación de no asistir al establecimiento, aislarme preventivamente en forma inmediata, comunicar tal circunstancia al número de teléfono según corresponda a la jurisdicción,
                                    e informar inmediatamente a la institución de dicha circunstancia para que adopten las medidas correspondientes.
                                </Typography></Grid>
                                <Grid><Typography className={classes.TypographyLblR}>{covidForm?.sospecha === 0 ? 'No' : 'Si'}</Typography></Grid>
                            </Grid>
                            <Grid container className={classes.GridLabel}>
                                <Grid>
                                    <Typography className={classes.TypographyLbl}>Fecha</Typography></Grid>
                                <Grid >
                                    <Typography className={classes.TypographyLblR}>{covidForm?.dateInscription}</Typography></Grid>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>

        </Grid>
    </div>
    )
}

export default UsersUpdate



