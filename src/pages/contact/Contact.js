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
        <Typography xs={12} fontWeight={'bold'} variant='h4' style={{color:'white', textAlign:'center', marginTop: '100px', marginBottom: '40px'}}>
            Contact
        </Typography>
        </Grid>
        </Grid>
        </div>
    </Grid>
    </ThemeProvider>
    </>
}
export default ContactPage