import React, {useState, useEffect} from 'react'
import {Grid, Typography, AppBar, Toolbar, useMediaQuery, IconButton, TextField, Box, Avatar} from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../styles.css';
import EMLZ from '../../assets/img/EM LZ.png'
import { LinkedIn, GitHub } from '@mui/icons-material';

const CustomBottomBar = ({scrollToTop, setOpen}) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const smallScreenBreakpoint = '(max-width: 769px)';
    const xsmallScreenBreakpoint = '(max-width: 540px)'; // Adjust the breakpoint as needed

    // Check if the current screen size matches the small screen breakpoint
    const isSmallScreen = useMediaQuery(smallScreenBreakpoint);
    const isXSmallScreen = useMediaQuery(xsmallScreenBreakpoint);

    return <>
    <div className='BottomBar'>
    <Grid container direction="row" alignContent={'space-between'}>
    <Grid item container direction="column" textAlign={isSmallScreen ? 'center' : 'start'} xs={12} md={4}>
        <Grid item>
        <img src={EMLZ} style={{maxHeight:'100%', maxWidth:'100%'}}/>
        </Grid>
        <Grid item>
        <Typography fontWeight={'regular'} variant='body2' style={{color:'white', marginTop: 20}}>Tempus Volumtatem</Typography>
        </Grid>
        <Grid container direction="row" spacing={2} textAlign={isSmallScreen ? 'center' : 'start'} marginTop={2}>
            <Grid item xs={6} sm={isSmallScreen ? 6 : 2} md={2}>
                <a href="https://github.com/Ericklzam" target="_blank" rel="noopener noreferrer">
                <GitHub style={{ color: 'white' }}/>
                </a>    
            </Grid>
            <Grid item  xs={6} sm={isSmallScreen ? 6 : 2} md={2}>
                <a href="https://www.linkedin.com/in/erickm-lopezzu/" target="_blank" rel="noopener noreferrer">
                <LinkedIn style={{ color: 'white' }}/>
                </a>
            </Grid>
        </Grid>
    </Grid>
    <Grid item container direction="column" textAlign={isSmallScreen ? 'center' : 'start'} xs={12} md={4} spacing={2} style={{marginTop: isSmallScreen ? 10 : 0}}>
        <Grid item xs={2}>
        <Typography fontWeight={'bold'} variant='h5' style={{color:'white'}}>Menu</Typography>
        </Grid>
        <Grid item xs={2} style={{alignSelf: isSmallScreen ? 'center' : 'start'}}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={()=>{scrollToTop()}}>Home</Typography>
            <div className="horizontal-line"/>
        </Grid>
        <Grid item xs={2} style={{alignSelf: isSmallScreen ? 'center' : 'start'}}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={()=>{setOpen(true)}}>Resume</Typography>
            <div className="horizontal-line"/>
        </Grid>
        <Grid item xs={2} style={{alignSelf: isSmallScreen ? 'center' : 'start'}}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={() => handleNavigation('/blog')}>Blog</Typography>
            <div className="horizontal-line"/>
        </Grid>
        <Grid item xs={2} style={{alignSelf: isSmallScreen ? 'center' : 'start'}}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={() => handleNavigation('/contact')}>Contact</Typography>
            <div className="horizontal-line"/>
        </Grid>
    </Grid>
    </Grid>
    </div>
    </>
}
export default CustomBottomBar;