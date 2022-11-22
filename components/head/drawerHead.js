import React from 'react'
import { styled, useTheme } from '@mui/material/styles';

function DrawerHeadComponent() {
  const DrawerHeaders = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    }));
    

    return (
      <DrawerHeaders  />
    )
}


export default DrawerHeadComponent
