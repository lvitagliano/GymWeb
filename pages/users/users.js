import React, { useState } from 'react'
import { withRouter } from 'next/router'
import { Grid, TextField, FormControl } from '@material-ui/core'
import { getAxios } from 'hoc/simpleFunctions'
import { GET_ALL_USER } from 'container/Querys'
import CardUsers from 'components/cards/users'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    grids: {
        margin: 5,
        padding: 5
    }
}));


const Index = ({ users }) => {
    const classes = useStyles();
    const [state, setstate] = useState({
        usuarios: users,
        usuariosSrc: users
    })
    function srcUsers({ target }) {
        const usuariosFiltered = state.usuarios.filter((exer) => {
            return exer.firstName.toLowerCase().includes(target.value.toLowerCase()) ||
                exer.lastName.toLowerCase().includes(target.value.toLowerCase())
        })
        setstate({
            ...state,
            usuariosSrc: usuariosFiltered
        })
    }
    return (
        <Grid>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <TextField id="search" label="Buscar" variant="outlined" onChange={(val) => srcUsers(val)} />
            </FormControl>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {
                    state.usuariosSrc && state.usuariosSrc.map((item, i) => (
                        <Grid key={i}  className={classes.grids}> <CardUsers item={item}/> </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

Index.getInitialProps = async (context, dos) => {
    let users = {}
    let body = {
        query: GET_ALL_USER
    }
    await getAxios(body).then(resp => users = resp.data.data.getAllUsers)


    return {
        users: users
    };
}

export default withRouter(Index)