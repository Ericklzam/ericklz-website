import React, {useState, useEffect} from 'react'
import {Grid, Typography, AppBar, Toolbar, useMediaQuery, IconButton, TextField, Box, Avatar} from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../styles.css';
import EMLZ from '../../assets/img/EM LZ.png'
import { LinkedIn, GitHub } from '@mui/icons-material';

const CustomBottomBar = ({scrollToTop, setOpen}) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return <>
    <div className='BottomBar' style={{height: '100%', paddingLeft: '170px', paddingRight:'170px', paddingTop: '70px', paddingBottom: '50px'}}>
    <Grid container direction="row" alignContent={'space-between'}>
    <Grid container direction="column" alignContent={'start'} xs={4}>
        <Grid item>
        <img src={EMLZ} style={{height:'7vh'}}/>
        </Grid>
        <Grid item>
        <Typography fontWeight={'regular'} variant='body2' style={{color:'white', marginTop:'20px'}}>Tempus Volumtatem</Typography>
        </Grid>
        <Grid container direction="row" spacing={2}alignContent={'start'} marginTop={'50px'}>
            <Grid item alignSelf={'center'}>
                <a href="https://github.com/Ericklzam" target="_blank" rel="noopener noreferrer">
                <GitHub style={{ color: 'white' }}/>
                </a>    
            </Grid>
            <Grid item alignSelf={'center'}>
                <a href="https://www.linkedin.com/in/erickm-lopezzu/" target="_blank" rel="noopener noreferrer">
                <LinkedIn style={{ color: 'white' }}/>
                </a>
            </Grid>
        </Grid>
    </Grid>
    <Grid container direction="column" alignContent={'start'}  xs={4} spacing={2}>
        <Grid item>
        <Typography fontWeight={'bold'} variant='h5' style={{color:'white'}}>Menu</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={()=>{scrollToTop()}}>Home</Typography>
            <div className="horizontal-line"/>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={()=>{setOpen(true)}}>Resume</Typography>
            <div className="horizontal-line"/>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={() => handleNavigation('/blog')}>Blog</Typography>
            <div className="horizontal-line"/>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="body2" style={{color:'white', cursor: 'pointer'}} onClick={() => handleNavigation('/contact')}>Contact</Typography>
            <div className="horizontal-line"/>
        </Grid>
    </Grid>
    </Grid>
    </div>
    </>
}
export default CustomBottomBar;