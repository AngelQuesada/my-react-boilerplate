import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const drawerWidth = 350;

export const MyAppLayout = ({ children }) => {
  return (
    <Box 
      sx={{ display: 'flex' }}
      className='animate__animated animate__fadeIn animate__faster'    
    >
      <Navbar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

        <Toolbar />
        
        { children }
      </Box>
    </Box>
  )
}