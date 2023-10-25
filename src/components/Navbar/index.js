import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import logoImage from '../../image/logo.jpg';
import { AppBar, Toolbar , IconButton,Typography, Stack, Button} from '@mui/material'
import { createTheme } from '@mui/material/styles';

const Navbar = () => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#333333', 
      },
      type: 'dark', 
    },
  });
  
  return (
    <>
      {/* Navigation bar */}
      <AppBar style={{ paddingLeft: '25px' }} sx={{ backgroundColor: customTheme.palette.primary.main }}>
      <Toolbar>

        <div style={{ display: '', alignItems: 'center' }}>
          {/* Logo */}
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: '90px', 
              width: 'auto',
              padding: 5
            }}
          />
        </div>
        <Typography variant='h6' component='div' sx={{flexGrow:1 }}> SEO Insight Pro
          </Typography>
        {/* Navigation links */}
        <NavMenu>
          <NavLink to="/home">    
           <Typography variant='h6' component='div' sx={{flexGrow:1 }}> Home
          </Typography></NavLink>
          <NavLink to="/about">    
          <Typography variant='h6' component='div' sx={{flexGrow:1 }}> About
          </Typography></NavLink>
          <NavLink to="/guide">    <Typography variant='h6' component='div' sx={{flexGrow:1 }}>
           Guide
         </Typography></NavLink>
        </NavMenu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
