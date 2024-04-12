import React, {useState, useEffect} from 'react';
import {Grid, Typography, IconButton} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import CustomBottomBar from '../../components/layout/BottomBar';
import PatterIcon from '../../assets/svg/PatternIcon'
import PortraitPhoto from '../../assets/img/PortraitPhoto.jpg'
import { LinkedIn, GitHub } from '@mui/icons-material';
import './styles.css';

const IndexHome = () => {
    const navigate = useNavigate();

    return <>
    <ThemeProvider theme={darkTheme}>
            <Grid>
                <CustomAppBar title={'Home'}/>
                <div className='Body' style={{height: '100%', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
                <Grid container direction='column' alignItems={'space-between'}>
                    {/*FIRST SECTION */}
                    <Grid container direction='row' alignItems={'space-between'}>
                        <Grid item container direction="column" spacing={7} xs={1}>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item">Home</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item">Resume</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item">Blog</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item">Contact</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} justifyContent={'center'} textAlign={'center'}>
                            <PatterIcon/> 
                        </Grid>
                        <Grid item container direction="column" spacing={1} xs={1} alignContent={'end'}>
                        <Grid item alignSelf={'center'} marginBottom={'20px'}>
                            <div className="vertical-line"/>
                        </Grid>
                        <Grid item alignSelf={'center'} marginBottom={'20px'}>
                            <a href="https://github.com/Ericklzam" target="_blank" rel="noopener noreferrer">
                            <GitHub style={{ color: 'white' }}/>
                            </a>    
                        </Grid>
                        <Grid item alignSelf={'center'} marginBottom={'20px'}>
                            <a href="https://www.linkedin.com/in/erickm-lopezzu/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn style={{ color: 'white' }}/>
                            </a>
                        </Grid>
                        </Grid>
                    </Grid>
                    {/*SECOND SECTION */}
                    <Typography xs={12} fontWeight={'bold'} variant='h6' style={{color:'white', textAlign:'center', marginTop: '100px', marginBottom: '40px'}}>
                        Hi!
                    </Typography>
                    <Grid container direction="row">
                        <Grid item xs={6}>
                        <img src={PortraitPhoto} alt="Preview" style={{height: '350px',width: '550px',borderRadius: '5%',}}/>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography fontWeight={'regular'} variant='body1' style={{color:'white', marginLeft: '40px', marginTop:'200px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor enim non luctus maximus. 
                        Suspendisse pellentesque dui id rhoncus porttitor. Quisque tortor nisl, aliquet eget diam sed, finibus consectetur turpis. 
                        Praesent a accumsan felis. Quisque et porta augue. Maecenas commodo auctor leo eget tempor. 
                        Proin in augue dapibus elit condimentum mollis.
                        </Typography>
                        </Grid>
                    </Grid>
                    {/*THIRD SECTION */}
                    <Grid container direction="row" justifyContent={'space-around'}>
                    <Typography xs={12} fontWeight={'bold'} variant='h6' style={{color:'white', textAlign:'center', marginTop: '100px', marginBottom: '40px'}}>
                        Skills
                    </Typography>
                    <Typography xs={12} fontWeight={'bold'} variant='h6' style={{color:'white', textAlign:'center', marginTop: '100px', marginBottom: '40px'}}>
                        Interests / Hobbies
                    </Typography>
                    </Grid>
                    <Grid container direction="row" justifyContent={'space-around'}>
                        <div className="vertical-line2"></div>
                    </Grid>
                    {/*FOURTH SECTION */}
                    <Typography xs={12} fontWeight={'bold'} variant='h6' style={{color:'white', textAlign:'center', marginTop: '100px', marginBottom: '40px'}}>
                        Some Multimedia Content
                    </Typography>
                </Grid>
                </div>
                {/*LAST SECTION */}
                <CustomBottomBar>

                </CustomBottomBar>
            </Grid>
        </ThemeProvider>
    </>
}
export default IndexHome