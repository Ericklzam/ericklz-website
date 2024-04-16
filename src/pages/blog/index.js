import React, {useState, useEffect} from 'react';
import {Grid, Typography} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import ResumeDialog from '../../components/dialogs/ResumeDialog';
import CustomBottomBar from '../../components/layout/BottomBar';
import '../home/styles.css';

const IndexBlog = () => {
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
        <div className='Body' style={{height: '90vh', paddingLeft: '170px', paddingRight:'170px', paddingTop: '50px'}}>
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
                    <Typography variant="h6" className="list-item" >Blog</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/contact')}>Contact</Typography>
                </Grid>
            </Grid>
            <Grid item xs={3}/>
            <Grid item container xs={4} justifyContent={'center'}></Grid>
            <Grid item xs={4}/>
        </Grid>
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
export default IndexBlog