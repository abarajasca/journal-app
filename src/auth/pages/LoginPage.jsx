import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export default function LoginPage() {
  return (
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={12}  sx={{ mt: 2 }}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com" 
                            fullWidth />
                                                        
                    </Grid>
                    <Grid item  xs={12} sx={{ mt: 2 }}>
                        <TextField 
                            label="Contrasenia" 
                            type="password" 
                            placeholder="Contrasena" 
                            fullWidth />
                                                        
                    </Grid>
                    <Grid container spacing={2} sx={{mb:2 , mt:1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                            Login
                            </Button>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                              <Google />
                              <Typography sx={{ml:1}}>Google</Typography>
                            </Button>

                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink }  color='inherit' to="/auth/register"> 
                        Crear cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
  )
}
