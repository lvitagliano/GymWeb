import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/'
import { useRouter } from 'next/router'
import {Img} from 'react-image'
import { useAppContext } from 'store/Context'
import { middleWareRoutes } from 'hoc/simpleFunctions'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      width: 150,
      height: 150,
    },
    gridMedia: {
      flexGrow: 1,
      marginLeft: '30%'
    }
  });

const CardExercises = ({item}) => {
    const [learnMore, setlearnMore] = useState(false)
    const classes = useStyles();
    const router = useRouter()
    const { isAuth } = useAppContext()
    return (
    <Card className={classes.root}>
      <CardActionArea  onClick={() => 
       router.push({
        pathname: '/general/exercisesDetail',
        query: { id: item._id },
      })
      }>
        <Grid container className={classes.gridMedia} spacing={2}>
        <CardMedia
          className={classes.media}
          image= {`/ejercicios/${item.image}`}
          title="Contemplative Reptile"
        />
        </Grid>
       
        <CardContent>
        <Img src={'https://www.example.com/foo.jpg'} decode={false} />
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {learnMore ? `${item.description}` : `${item.description.substr(0,200)}...`}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => setlearnMore(learnMore => !learnMore)} size="small" color="primary">
          {learnMore ? 'Ver menos' : 'Ver más'}
        </Button>
      </CardActions>
    </Card>
    )
}

export default CardExercises