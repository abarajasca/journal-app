import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export default function RegisterPage() {
  return (
        <AuthLayout title="Registro nueva cuenta">
            <form>
                <Grid container>
                    <Grid item xs={12}  sx={{ mt: 2 }}>
                        <TextField 
                            label="Nombre completo" 
                            type="input" 
                            placeholder="Nombre" 
                            fullWidth />
                                                        
                    </Grid>
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
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                            Crear cuenta
                            </Button>
                        </Grid>                      

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1}}>Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink }  color='inherit' to="/auth/login"> 
                        Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
  )
}
