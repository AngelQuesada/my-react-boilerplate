import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export const AppTheme = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        { children }
      </ThemeProvider>
    </>
  )
}
