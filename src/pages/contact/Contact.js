import React, {useState, useEffect} from 'react';
import {Grid, Typography, Box, Button} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowUp, GitHub, LinkedIn } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import CustomBottomBar from '../../components/layout/BottomBar';
import PatternIcon from '../../assets/svg/PatternIcon';
import WebSite from '../../assets/svg/WebSite.svg'
import ResumeDialog from '../../components/dialogs/ResumeDialog';
import CustomTextField from '../../components/CustomTextfield';
import '../home/styles.css';

const ContactPage = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return <>
    <ThemeProvider theme={darkTheme}>
    <Grid>
        <CustomAppBar title={'Home'}/>
        <div className='Body' style={{height: '100%', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
        <Grid container direction='column'>
        {/*MENU */}
        <Grid container direction='row' alignItems={'start'} >
            <Grid item xs={1} container direction="column" spacing={7}>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/')}>Home</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleOpen()}>Resume</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/blog')}>Blog</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" >Contact</Typography>
                </Grid>
            </Grid>
            <Grid item xs={3}/>
            <Grid item container xs={4} justifyContent={'center'}><img src={WebSite} alt="qrWeb" height={'100%'} width={'100%'}/></Grid>
            <Grid item xs={3}/>
            <Grid item container direction={'column'} xs={1} spacing={1} alignContent={'end'}>
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
        <Grid container xs={12} alignContent={'center'} justifyContent={'center'}>
            <Grid item xs={8}><Typography fontWeight={'bold'} variant='h4' style={{color:'white', textAlign:'center', marginBottom: '60px'}}>
                Contact Me
            </Typography></Grid>
            <Grid item xs={8} marginBottom={'20px'}><Typography color={'white'} fontWeight={'bold'} textAlign={'start'}>
                Send me an email through this form to contact@ericklz.com
            </Typography></Grid>
            <CustomTextField text={'Name'} xs={8} placeholder="Enter your name..."/>
            <CustomTextField text={'E-mail'} xs={8} placeholder="Enter your contact e-mail..."/>
            <CustomTextField text={'Subject'} xs={8} placeholder="Your subject..."/> 
            <CustomTextField text={'Message'} xs={8} rows={7} placeholder="Your Message..."/>
            <Grid item xs={8} textAlign={'center'}>
            <Button variant="contained" color={'error'} sx={{height: '42px', width:'150px', 
            backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '8px', 
            border: '1px solid white', marginTop:'20px', textTransform: 'none',}} xs={4}>
                <Typography fontSize={14}>
                    Send Message
                </Typography>
            </Button>
            </Grid>
            
        </Grid>
        <Box height={'40px'}/>
        </Grid>
        </div>
        <CustomBottomBar scrollToTop={scrollToTop} setOpen={setOpen}/>
    </Grid>
    </ThemeProvider>
    <ResumeDialog open={open} setOpen={setOpen}/>
    {showButton && (
        <button className="scroll-to-top-btn" onClick={()=>{scrollToTop()}}>
          <KeyboardArrowUp/>
        </button>)}
    </>
}
export default ContactPage