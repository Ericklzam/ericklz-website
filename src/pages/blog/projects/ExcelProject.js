import React, {useState, useEffect} from 'react';
import {Grid, Typography, Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import darkTheme from '../../../theme';
import ResumeDialog from '../../../components/dialogs/ResumeDialog';
import CustomAppBar from '../../../components/layout/AppBar';
import CustomBottomBar from '../../../components/layout/BottomBar';
import '../../home/styles.css'

const ExcelProject = () => {
    const navigate = useNavigate();

    const [showButton, setShowButton] = useState(false);
    const [open, setOpen] = useState(false);

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

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };
    return <>
    <ThemeProvider theme={darkTheme}>
    <Grid>
        <CustomAppBar title={'Home'}/>
        <div className='Body' style={{height: '100%', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
        <Grid container direction='column'></Grid>
        </div>
    </Grid>
    </ThemeProvider>
    <CustomBottomBar scrollToTop={scrollToTop} setOpen={setOpen}/>
    <ResumeDialog open={open} setOpen={setOpen}/>
    {showButton && (
        <button className="scroll-to-top-btn" onClick={()=>{scrollToTop()}}>
          <KeyboardArrowUp/>
        </button>)}    
    </>
}

export default ExcelProject;