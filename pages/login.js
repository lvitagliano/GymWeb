import React from 'react'
import { withRouter } from 'next/router'
import Login from 'components/account/login'
import Remember from 'components/account/remember'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Logo } from "components/Logo"


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const Account = ({ router }) => {
    const classes = useStyles();
    const { query } = router


    const switcherType = (type) => {
        switch (type) {
            case 'login':
                return <Login />
                break;
            default:
                return <Login />
                break;
        }
    }

    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid style={{ marginTop: 50, marginBottom: 30 }}><Logo url={'/account/login'}/></Grid>

            {
                switcherType(query.formtype)

            }

        </Grid>

    )
}

export default withRouter(Account)