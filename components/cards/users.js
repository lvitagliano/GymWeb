import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/'
import { useRouter } from 'next/router'
import { Img } from 'react-image'

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

const CardUsers = ({ item }) => {
  const [learnMore, setlearnMore] = useState(false)
  const classes = useStyles();
  const router = useRouter()


  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => {
        router.push({
          pathname: '/users/usersDetail',
          query: { id: item._id },
        })
      }}>
        <Grid container className={classes.gridMedia} spacing={2}>
          <CardMedia
            className={classes.media}
            image='https://www.example.com/foo.jpg'
            title="Contemplative Reptile"
          />
        </Grid>
        <CardContent>
          <Img src={'https://www.example.com/foo.jpg'} decode={false} />
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.firstName} {item.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.email}
          </Typography>
          {learnMore && <Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.phone}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.nac}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.gender}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.profile}
            </Typography>
          </Grid>}
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

export default CardUsers