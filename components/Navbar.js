import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { useRouter } from 'next/router'
import Link from 'next/link'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { menuAdmin } from 'res/index'
import { Logo } from "./Logo";
import styles from 'styles/Home.module.css'


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1A2840",
    color: '#fff',
    fontSize: 22

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const Navbar = ({ open, handleDrawerClose, userType='admin' }) => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter()

  const MyButton = React.forwardRef(({ onClick, href,title }, ref) => {
    return (
      <a href={href} onClick={onClick } ref={ref}>
        {title}
      </a>
    )
  })

  const handleClick = () => {
    handleDrawerClose()
  }

  const handleReturn = () => {
    router.push(`/account/login`)
  }

  const renderList = () => {
     return <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClick}>
          {theme.direction === 'ltr' ?
            <ChevronLeftIcon style={{ color: 'white', fontSize: 40 }} /> :
            <ChevronRightIcon style={{ color: 'white', fontSize: 40 }} />}
        </IconButton>
      </div>
      
      <Divider style={{ backgroundColor: 'white' }} />
      <List>
        {menuAdmin
        .filter((menu) => menu.type === 'admin')
        .map((text, i) => (
          <ListItem key={i} button key={text} onClick={handleClick}>
            <Link href={text.baseUrl} passHref>
            <MyButton title={text.title} href={text.baseUrl}/>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  }
  
  return renderList(userType)
}

export default Navbar
