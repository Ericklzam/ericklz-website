import React, {useState, useEffect} from 'react';
import {Grid, Typography} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import '../home/styles.css';

const ContactPage = () => {

    return <>
    <ThemeProvider theme={darkTheme}>
    <Grid>
        <CustomAppBar title={'Home'}/>
        <div className='Body' style={{height: '90vh', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
        <Grid item xs={2} sx={{ minWidth: '200px' }}>
        <Grid container direction="column" spacing={7}>
        <Grid item xs={4}>
            <Typography variant="h6" className="list-item">Home</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" className="list-item">Resume</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" className="list-item">Blog</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" className="list-item">Contact</Typography>
        </Grid>
        </Grid>
        </Grid>
        </div>
    </Grid>
    </ThemeProvider>
    </>
}
export default ContactPage