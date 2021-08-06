import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from './Navbar'
import axios from 'axios'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useAppContext } from 'store/Context'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppBar, Grid, Toolbar, IconButton, Menu, MenuItem, Button } from '@material-ui/core'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import { Logo } from "./Logo"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  rootLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  contentWithOut: {
    width: '100%',
    marginTop: 50
  },
  content: {
    width: '100%',
    marginTop: 50,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Layout = ({ children }) => {
  const router = useRouter()
  const classes = useStyles();
  const theme = useTheme();
  const URL = process.env.NEXT_PUBLIC_AUTH_URL

  const [open, setOpen] = useState(false);
  const { isAuth, userType, getCurrentUserFnc } = useAppContext()

  useEffect(() => {
    getCurrentUserFnc()
    if(isAuth.autorization){
      router.push('/')
    }else{
      router.push('/login')
    }
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const hancleCleckSession = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleLogoutClick = () => {
    axios.post(`${URL}/auth/logout`,{},{
      headers:{'Content-Type':'application/json'},
      withCredentials:true
    }).then((res)=>{
      handleClose()
      router.push('/')
      
    }).catch((error)=>{
      console.log(error)
      handleClose()
      router.push('/')
      router.reload()
    })
  };

  const renderApBar = (auth) => {
 return <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ display: auth ? 'block' : 'none' }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
             {isAuth.autorization &&  <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon style={{ color: 'white', fontSize: 35 }} />
              </IconButton>}
              <div className={clsx(!open && classes.hide)} />
              <Logo url={'/'} />
              <Button aria-controls="simple-menu"
                aria-haspopup="true" onClick={hancleCleckSession}>
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <NavBar open={open} userType={userType?.profile} handleDrawerClose={() => handleDrawerClose()} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
          onClick={handleDrawerClose}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
  }

  return renderApBar(isAuth)
}

export default Layout
