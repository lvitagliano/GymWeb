import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router'
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function ListComponent({open}) {
  const stylesBtn = {minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}
  const stylesIcon = {minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}
  const styleOp = {opacity: open ? 1 : 0}
  const router = useRouter()

  const handleClick = (e) => {
    router.push(e)
  }


	return (
        <>
        <Divider />
        <List>
        <ListItem onClick={() => handleClick('/')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Inicio'} sx={styleOp}/>
        </ListItemButton>
      </ListItem>
      
      <Divider />
      <ListItem onClick={() => handleClick('/tramites/tramitestodos')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary={'Tramites'} sx={styleOp}/>
        </ListItemButton>
      </ListItem>

      <Divider />
      <ListItem onClick={() => handleClick('/clientes/tramites')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary={'Tramites por Cliente'} sx={styleOp}/>
        </ListItemButton>
      </ListItem>
      {/* <ListItem onClick={() => handleClick('/tipostramites')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary={'Tipos de Tramites'} sx={styleOp}/>
        </ListItemButton>
      </ListItem> */}
       </List>

       <Divider />
        <List>
        <ListItem onClick={() => handleClick('/clientes/clientestodos')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary={'Clientes'} sx={styleOp}/>
        </ListItemButton>
      </ListItem>
      
      {/* <ListItem onClick={() => handleClick('/tiposclientes')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary={'Tipos de Clientes'} sx={styleOp}/>
        </ListItemButton>
      </ListItem> */}
       </List>

       {/* <Divider />
        <List>
        <ListItem onClick={() => handleClick('/tipospagos')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <RequestQuoteIcon />
          </ListItemIcon>
          <ListItemText primary={'Tipos de Pagos'} sx={styleOp}/>
        </ListItemButton>
      </ListItem>
       </List> */}

       <Divider />
        <List>
        <ListItem onClick={() => handleClick('/usuarios/usuariostodos')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Usuarios'} sx={styleOp}/>
        </ListItemButton>
      </ListItem>
      
      {/* <ListItem onClick={() => handleClick('/usuarios/tiposusuarios')} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={stylesBtn}>
          <ListItemIcon sx={stylesIcon}>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Tipos de Usuarios'} sx={styleOp}/>
        </ListItemButton>
      </ListItem> */}
       </List>
       </>
    )
}


export default ListComponent
