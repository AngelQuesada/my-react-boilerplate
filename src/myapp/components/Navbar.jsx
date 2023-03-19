import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const Navbar = ({ drawerWidth = 0 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h6' component='div' noWrap>
            MyApp
          </Typography>

          <IconButton onClick={onLogout}>
            <LogoutOutlined color='error' />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
