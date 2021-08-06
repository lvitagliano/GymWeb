import * as React from "react"
import {Button} from './style'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  images: {
    overflow: 'hidden',  
  },
}));

export function Logo({url}) {
  const classes = useStyles();
  const router = useRouter()

  return (
    <Link href={url}>
       <Image
       className={classes.images}
        src="/images/NOG-logo.png"
        alt="og"
        width={40}
        height={40}
      /> 
    </Link>
  )
}



     

    





