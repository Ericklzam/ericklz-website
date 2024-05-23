import React, {useState, useEffect} from 'react';
import {Grid, Typography, AppBar, Toolbar, useMediaQuery, IconButton, TextField, Box, Avatar} from '@mui/material';
import {ArrowBackIos, Person} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import '../styles.css';
import EMLZ from '../../assets/img/EM LZ.png'
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = ({title}) => {

  const smallScreenBreakpoint = '(max-width: 768px)';
  const xsmallScreenBreakpoint = '(max-width: 425px)'; // Adjust the breakpoint as needed
  const navigate = useNavigate();

  // Check if the current screen size matches the small screen breakpoint
  const isSmallScreen = useMediaQuery(smallScreenBreakpoint);
  const isXSmallScreen = useMediaQuery(xsmallScreenBreakpoint);
    return <>
    <AppBar className="CustAppbar">
        <Toolbar className="CustToolBar">
        <Grid container display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
          {isSmallScreen ?
          <Grid item xs={4} justifyContent={'start'}> 
          <IconButton
            color="inherit"
            sx={{ mr: 2, display: { md: 'none' } }}
          > <MenuIcon style={{color: '#ffffff'}}/> 
          </IconButton> 
          </Grid>
          : null}
          <Grid item xs={4} sm={isSmallScreen ? 4 : 1} md={1} justifyContent={'start'}>
          <div style={{cursor:'pointer', textAlign: isSmallScreen ? 'center' : 'left' }}>
          <img src={EMLZ} style={{maxHeight:'90%', maxWidth:'90%'}} onClick={()=>{navigate('/')}}/>
          </div>
          </Grid>
          {isSmallScreen ? null : 
          <Grid item xs={4} sm={isSmallScreen ? 4 : 1} md={1}>
          <div style={{textAlign:'left'}}>
          <IconButton
            sx={{ mr: 2, marginLeft:'10px'}}
          > <SearchIcon style={{color: 'white'}}/> 
          </IconButton>
          </div>
          </Grid>
          }

          <Grid item xs={4} sm={isSmallScreen ? 4 : 10} md={10}textAlign={'end'}>
          <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true">
          {isXSmallScreen ? null : <Typography style={{color:'white', marginRight:'20px'}}>Sign In</Typography>}
        
          <Avatar className="AppBarAvatar"><Person style={{color: 'black'}}/></Avatar>
        </IconButton>
        </Grid>
        </Grid>
        
        
        </Toolbar>
      </AppBar>
    </>
}
export default CustomAppBar