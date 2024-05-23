import React, {useState, useEffect} from 'react';
import {Grid, Typography, Box, useMediaQuery} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import darkTheme from '../../theme';
import CustomAppBar from '../../components/layout/AppBar';
import ResumeDialog from '../../components/dialogs/ResumeDialog';
import CustomBottomBar from '../../components/layout/BottomBar';
import ExcelFile from '../../assets/img/ExcelFile.png';
import MasterMind from '../../assets/img/MasterMindPic.png'
import Otgw from '../../assets/img/Otgw.jpg'
import BlogPost from '../../components/BlogPost';
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

  const handleSelectPost = (option) => {
    switch (option) {
      case "Control de Herramienta (VBA)":
        navigate('/blog/excel_project');
        break;
      case "MasterMind Game (Python)":
        navigate('/blog/mm_project');
        break;
      case "Over the Garden Wall":
        navigate('/blog/over_the_garden_wall');
        break;
    }
  }

  const smallScreenBreakpoint = '(max-width: 768px)'; // Adjust the breakpoint as needed

  // Check if the current screen size matches the small screen breakpoint
  const isSmallScreen = useMediaQuery(smallScreenBreakpoint);

    return <>
    <ThemeProvider theme={darkTheme}>
    <Grid>
        <CustomAppBar title={'Home'}/>
        <div className='Body'>
        <Grid container direction='column'>
        {/*MENU */}
        <Grid container direction='row' alignItems={'start'} >
        {isSmallScreen ? null : <Grid item container direction="column" spacing={8} xs={false} sm={1} md={1}>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item">Home</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item" onClick={() => handleOpen()}>Resume</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/blog')}>Blog</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" className="list-item" onClick={() => handleNavigation('/contact')}>Contact</Typography>
                            </Grid>
                        </Grid>}
            <Grid item xs={4}/>
            <Grid item direction={'column'} xs={7}>
            <Typography fontWeight={'bold'} variant='h5' style={{color:'white', textAlign:'center', marginBottom: '30px'}}>
                Posts
            </Typography>
                <Typography fontWeight={'regular'} variant='body1' style={{color:'white'}}>
                    So i was thinking what could i possibly add to this website besides the regular home page and contact page, and 
                    i came up with the idea of showing you some of my personal projects that i have worked on, not the actual code thought... 
                    jk, some of them are on my github so you can steal my sh*t, so here it is...
                </Typography>
                <Box height={'20px'}/>
                <Typography fontWeight={'regular'} variant='body1' style={{color:'white'}}>
                Oh yeah, also i talk about other things besides my projects so this pages doesn't feel empty hahaha
                </Typography>
                <Box height={'20px'}/>
                <Typography fontWeight={'regular'} variant='body1' style={{color:'white'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.
                </Typography>
            </Grid>
        </Grid>
        <Box height={'80px'}/>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={3}><BlogPost text1="Control de Herramienta (VBA)" text2="Un archivo de excel para empresas constructoras" 
          text3="Erick Lopez" text4="| Apr 21 2024" imageUrl={ExcelFile} sizew="340px" sizeh="300px"
          handleSelectPost={handleSelectPost}/></Grid>

          <Grid item xs={3}><BlogPost text1="MasterMind Game (Python)" text2="The classic not so classic game coded on python" 
          text3="Erick Lopez" text4="| Apr 21 2024" imageUrl={MasterMind} sizew="340px" sizeh="300px"
          handleSelectPost={handleSelectPost}/></Grid>

          <Grid item xs={3}><BlogPost text1="Over the Garden Wall" text2="An analysis of this masterpiece" 
          text3="Erick Lopez" text4="| Apr 21 2024" imageUrl={Otgw} sizew="340px" sizeh="300px"
          handleSelectPost={handleSelectPost}/></Grid>
        </Grid>
        <Box height={'80px'}/>
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