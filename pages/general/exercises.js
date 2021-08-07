import React, { useState } from 'react'
import { withRouter } from 'next/router'
import { Grid, TextField, FormControl } from '@material-ui/core'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_ALL_EXERCISES } from 'container/Querys'
import CardExercises from 'components/cards/exercises'
import { makeStyles } from '@material-ui/core/styles'
import { parseCookies } from 'hoc/simpleFunctions'
import Router from 'next/router'


const useStyles = makeStyles((theme) => ({
    grids: {
        margin: 5,
        padding: 5
    }
}));


const Index = ({ exercises }) => {
    const classes = useStyles();
    const [state, setstate] = useState({
        ejercicios: exercises,
        ejerciciosSrc: exercises
    })
    function srcExercises({ target }) {
        const excercisesFiltered = state.ejercicios.filter((exer) => {
            return exer.name.toLowerCase().includes(target.value.toLowerCase()) ||
                exer.description.toLowerCase().includes(target.value.toLowerCase())
        })
        setstate({
            ...state,
            ejerciciosSrc: excercisesFiltered
        })
    }
    return (
        <Grid>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <TextField id="search" label="Buscar" variant="outlined" onChange={(val) => srcExercises(val)} />
            </FormControl>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    state.ejerciciosSrc && state.ejerciciosSrc.map((item, i) => (
                        <Grid key={i}  className={classes.grids}> <CardExercises item={item}/> </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
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
    let exercises = {}
    let body = {
        query: GET_ALL_EXERCISES
    }
    await getAxios(body).then(resp => exercises = resp.data.data.getAllExercises)


    return {
        exercises: exercises
    };
}

export default withRouter(Index)