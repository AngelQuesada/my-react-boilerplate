import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @' ],
  password: [ (value) => value.length >= 6, 'El password debe tener al menos 6 caracteres' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { 
    onInputChange,
    displayName,
    email,
    password,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid 
  } = useForm(formData, formValidations);

  const [ formSubmitted, setFormSubmitted ] = useState(false);
  
  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();

    if (!isFormValid) return;

    setFormSubmitted(true);
    
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  }

  return (
    <AuthLayout title='Register'>
      <form 
        onSubmit={ event => onSubmit(event)}
        className='animate__animated animate__fadeIn'    
      >
        <Grid container>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Full Name' 
              type='text' 
              placeholder='John Doe' 
              fullWidth
              name='displayName'
              value={displayName}
              error={!!displayNameValid && !!formSubmitted }
              helperText={ displayNameValid }
              onChange={onInputChange}
              >
            </TextField>
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Email' 
              type='email' 
              placeholder='email@google.com' 
              fullWidth
              name='email'
              value={email}
              error={!!emailValid && !!formSubmitted }
              helperText={ emailValid }
              onChange={onInputChange}
              >
            </TextField>
          </Grid>
          
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Password' 
              type='password' 
              placeholder='Password' 
              fullWidth
              name='password'
              value={password}
              error={!!passwordValid && !!formSubmitted}
              helperText={ passwordValid }
              onChange={onInputChange}
              >
            </TextField>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2,mt: 2 }}>
            
            <Grid display={ !!errorMessage ? '' : 'none' } item xs={ 12 }>
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button 
                disabled={ isCheckingAuthentication }
                variant='contained' 
                fullWidth
                type='submit'
              >
                Create account
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
              <Typography sx={{ mr: 1}}>You already have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Login
              </Link>
            </Grid> 
          </Grid>
          
        </Grid>
      </form>
    </AuthLayout>
  )
}

