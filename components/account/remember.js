import React, {useState} from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import {Paper, Card, CardActions,CardContent,Button, Grid, FormControl,
Input, InputLabel, InputAdornment} from '@material-ui/core'
import { useRouter } from 'next/router'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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

export default function Remember() {
    const classes = useStyles();
    const router = useRouter()
    const [values, setValues] = useState({
        email: '',
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmits(values)
  
     }
    const onSubmits = (input) => {
    
     }

    return (
        <form disabled={false} onSubmit={handleSubmit}>
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
                                        <MailOutlineIcon />
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
                            Recuperar contraseña
                        </Button>
                        <br />
                        <Link href="/">
                            <Button size="medium" className={classes.subTitle}>Recordó la contraseña?</Button>
                        </Link>
                        <Link href="/account/register">
                            <Button size="medium" className={classes.subTitle}>Registrarse</Button>
                        </Link>
                    </Grid>
                </CardActions>
            </Card>
        </Paper>
        </form>
    );
}