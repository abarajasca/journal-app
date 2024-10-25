import { Box } from '@mui/material'
import React from 'react'
import { Navbar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ( { children } ) => {
  return (
    <Box
        sx={{ display: 'flex' }} 
    >
        <Navbar drawerWidth={drawerWidth}>

        </Navbar>

        <SideBar drawerWidth={drawerWidth} />

         <Box
            component='main'
            sx={{flexGrow:1 , p:2, mt:7 }}
         >
            { children }

         </Box>

    </Box>
  )
}
