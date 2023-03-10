import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(status => status.auth);
  
  const isAuthenticating = useMemo( () => status === 'checking', [status] )

  const { email, password, onInputChange } = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLoginWithEmailAndPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title='Login'>
      <form 
        className='animate__animated animate__fadeIn' 
        onSubmit={event => onSubmit(event)}
      >
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>

            <TextField 
              label='Mail' 
              type='email' 
              placeholder='mail@google.com'
              onChange={onInputChange}
              name='email'
              value={email}
              fullWidth>
            </TextField>
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Password' 
              type='password' 
              placeholder='Password' 
              onChange={onInputChange}
              name='password'
              value={password}
              fullWidth>
            </TextField>
          </Grid>

          <Grid display={ !!errorMessage ? '' : 'none' } item xs={ 12 }>
            <Alert severity='error'>
              { errorMessage }
            </Alert>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={isAuthenticating}
                type='submit' 
                variant='contained'
                fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={isAuthenticating}
                onClick={onGoogleSignIn} 
                variant='contained' 
                fullWidth>
                <Google/>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            
          </Grid>
          
          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid> 
        </Grid>
      </form>
    </AuthLayout>
  )
}
