import React, {useState, useEffect} from 'react';
import {Grid, Typography, AppBar, Toolbar, useMediaQuery, IconButton, TextField, Box, Avatar} from '@mui/material';
import {ArrowBackIos, Person} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import '../styles.css';
import EMLZ from '../../assets/img/EM LZ.png'
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = ({title}) => {

  const smallScreenBreakpoint = '(max-width: 768px)'; // Adjust the breakpoint as needed

  // Check if the current screen size matches the small screen breakpoint
  const isSmallScreen = useMediaQuery(smallScreenBreakpoint);
    return <>
    <AppBar className="CustAppbar" style={{}} >
        <Toolbar className="CustToolBar">
        <Grid display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          {isSmallScreen && title === 'Home' ? <IconButton
            color="inherit"
            sx={{ mr: 2, display: { md: 'none' } }}
          > <MenuIcon style={{color: '#ffffff'}}/> </IconButton> : 
          isSmallScreen && title === 'Contact' ?
          <IconButton
            color="inherit"
            sx={{ mr: 2, display: { md: 'none' } }}
          > <ArrowBackIos style={{color: '#000000'}}/> </IconButton> : null}
          <img src={EMLZ} style={{height:'7vh'}}/>
          <IconButton
            sx={{ mr: 2, marginLeft:'50px'}}
          > <SearchIcon style={{color: 'white'}}/> </IconButton>
          
        </Grid>
        
        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true">
        <Typography style={{color:'white', marginRight:'20px'}}>Sign In</Typography>
          <Avatar className="AppBarAvatar"><Person style={{color: 'black'}}/></Avatar>
        </IconButton>
        </Toolbar>
      </AppBar>
    </>
}
export default CustomAppBar