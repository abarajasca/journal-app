import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
        position='fixed'
        sx={{ 
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: { sm: `${ drawerWidth }px` }    
            }}
    >
      <Toolbar>
        <IconButton 
            color='inherit'
            edge="start"
            sx={{ mr: 2, display: { sm: 'none'}}}
        >
            <MenuOutlined />
        </IconButton>
        <Grid container direction="row" justifyContent="space-around" alignItems='center'>
            <Typography variant='h6'>Journal App</Typography>
            <IconButton color='error'>
                <LogoutOutlined />
            </IconButton>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
